// Adapted from http://web.mit.edu/6.813/www/sp18/assignments/as1-implementation/logging.js
//
// A simple Google-spreadsheet-based event logging framework.
//
// Add logging.js to your Web App to log standard input and custom events.
//
// This is currently set up to log every mousedown and keydown
// event, as well as any events that might be triggered within
// the app by triggering the 'log' event anywhere in the doc
// as follows:
//
// document.dispatchEvent(new CustomEvent('log', { detail: {
//   eventName: 'myevent',
//   info: {key1: val1, key2: val2}
// }}));

var ENABLE_NETWORK_LOGGING = true; // Controls network logging.
var ENABLE_CONSOLE_LOGGING = true; // Controls console logging.
var LOG_VERSION = '0.1';           // Labels every entry with version: "0.1".

// These event types are intercepted for logging before jQuery handlers.
var EVENT_TYPES_TO_LOG = {
  click: true,
  // mousedown: true,
  // keydown: true,
  // custom1: true,
};

// These event properties are copied to the log if present.
var EVENT_PROPERTIES_TO_LOG = {
  // which: true,
  // pageX: true,
  // pageY: true
};

// This function is called to record some global state on each event.
var GLOBAL_STATE_TO_LOG = function() {
  return {
  };
};

var loggingjs = (function() { // Immediately-Invoked Function Expression (IIFE); ref: http://benalman.com/news/2010/11/immediately-invoked-function-expression/

// A persistent unique id for the user.
var uid = getUniqueId();

// Hooks up all the event listeners.
function hookEventsToLog() {
  // Set up low-level event capturing.  This intercepts all
  // native events before they bubble, so we log the state
  // *before* normal event processing.
  for (var event_type in EVENT_TYPES_TO_LOG) {
    document.addEventListener(event_type, logEvent, true);
  }
}

// Returns a CSS selector that is descriptive of
// the element, for example, "td.left div" for
// a class-less div within a td of class "left".
function elementDesc(elt) {
  if (elt == document) {
    return 'document';
  } else if (elt == window) {
    return 'window';
  }
  function descArray(elt) {
    var desc = [elt.tagName.toLowerCase()];
    if (elt.id) {
      desc.push('#' + elt.id);
    }
    for (var j = 0; j < elt.classList.length; j++) {
      desc.push('.' + elt.classList[j]);
    }
    return desc;
  }
  var desc = [];
  while (elt && desc.length <= 1) {
    var desc2 = descArray(elt);
    if (desc.length == 0) {
      desc = desc2;
    } else if (desc2.length > 1) {
      desc2.push(' ', desc[0]);
      desc = desc2;
    }
    elt = elt.parentElement;
  }
  return desc.join('');
}

// Parse user agent string by looking for recognized substring.
function findFirstString(str, choices) {
  for (var j = 0; j < choices.length; j++) {
    if (str.indexOf(choices[j]) >= 0) {
      return choices[j];
    }
  }
  return '?';
}

// Generates or remembers a somewhat-unique ID with distilled user-agent info.
function getUniqueId() {
  if (!('uid' in localStorage)) {
    var browser = findFirstString(navigator.userAgent, [
      'Seamonkey', 'Firefox', 'Chromium', 'Chrome', 'Safari', 'OPR', 'Opera',
      'Edge', 'MSIE', 'Blink', 'Webkit', 'Gecko', 'Trident', 'Mozilla']);
    var os = findFirstString(navigator.userAgent, [
      'Android', 'iOS', 'Symbian', 'Blackberry', 'Windows Phone', 'Windows',
      'OS X', 'Linux', 'iOS', 'CrOS']).replace(/ /g, '_');
    var unique = ('' + Math.random()).substr(2);
    localStorage['uid'] = os + '-' + browser + '-' + unique;
  }
  return localStorage['uid'];
}

var viewLookup = {
  "#/": "LandingView",
  "#/accordion": "MenuView",
  "#/full": "MenuView",
  "#/time": "TimeView",
}

// Log the given event.
function logEvent(event, customName, customInfo) {
	
	console.log('event', event, 'customName', customName, 'customInfo', customInfo);
	
  var time = (new Date).getTime();
  var eventName = customName || event.type;
 if (customName == 'null') {eventName = event.type;}
  // By default, monitor some global state on every event.
  var infoObj = GLOBAL_STATE_TO_LOG();
  // And monitor a few interesting fields from the event, if present.
  for (var key in EVENT_PROPERTIES_TO_LOG) {
	if (event && key in event) {
      infoObj[key] = event[key];
    }
  }
  // Let a custom event add fields to the info.
  if (customInfo) {
    infoObj = Object.assign(infoObj, customInfo);
  }
  var info = JSON.stringify(infoObj);
  var target = document;
  if (event) {target = elementDesc(event.target);}
  var view = location.hash;
  if (view.includes("#/")) {view = viewLookup[view]}
  var component = 'null';
  var dv = 'null';

  if (customInfo) {
    if ("Info" in customInfo) {info = customInfo["Info"];}
    if ("Target" in customInfo) {target = customInfo["Target"];}
    if ("View" in customInfo) {view = customInfo["View"];}
    if ("Component" in customInfo) {component = customInfo["Component"];}
    if ("DV" in customInfo) {dv = customInfo["DV"];}
  }

  // to prevent double logging
  // logging will take place if component is not custom and there is no customInfo
  // OR if customInfo is provided
  var custom = false;
  var custom1 = undefined
  if (event) {
      try {custom1 = event.target.offsetParent.dataset.custom}
      catch(err) {custom1 = undefined}
    var customList = [custom1,
                    event.target.parentNode.parentNode.dataset.custom,
                    event.srcElement.dataset.custom]
    if (customList.includes("true")) {custom = true;}
  }
  var log = (!custom && customInfo == undefined) || (customInfo != undefined);

  if (ENABLE_CONSOLE_LOGGING && log) {
    console.log(uid, time, info, eventName, target, view, component, LOG_VERSION, dv);
  }
  if (ENABLE_NETWORK_LOGGING && log) {
    sendNetworkLog(uid, time, info, eventName, target, view, component, LOG_VERSION, dv);
  }
}

// OK, go.
if (ENABLE_NETWORK_LOGGING) {
  hookEventsToLog();
}

// module pattern to allow some key functions to be "public"
return {
	logEvent
};

}());

/////////////////////////////////////////////////////////////////////////////
// CHANGE ME:
// ** Replace the function below by substituting your own google form. **
/////////////////////////////////////////////////////////////////////////////
//
// 1. Create a Google form called "Network Log" at forms.google.com.
// 2. Set it up to have several "short answer" questions; here we assume
//    seven questions: uid, time, eventName, target, info, state, version.
// 3. Run googlesender.py to make a javascript
//    function that submits records directly to the form.
// 4. Put that function in here, and replace the current sendNetworkLog
//    so that your version is called to log events to your form.
//
// For example, the following code was written as follows:
// python googlesender.py https://docs.google.com/forms/d/e/1.../viewform
//
// This preocess changes the ids below to direct your data into your own
// form and spreadsheet. The formid must be customized, and also the form
// field names such as "entry.1291686978" must be matched to your form.
// (The numerical field names for a Google form can be found by inspecting
// the form input fields.) This can be done manually, but since this is an
// error-prone process, it can be easier to use googlesender.py.
//
/////////////////////////////////////////////////////////////////////////////

// Network Log submission function
// submits to the google form at this URL:
// docs.google.com/forms/d/e/1FAIpQLSc9ZQq_eb-Nx0PYLNjH4zyc9IGG7jvX45dJETKgjtTbRloaNg/viewform
function sendNetworkLog(
    userid,
    timestamp,
    info,
    eventname,
    target,
    view,
    component,
    log_version,
    dv) {
  var formid = "e/1FAIpQLSc9ZQq_eb-Nx0PYLNjH4zyc9IGG7jvX45dJETKgjtTbRloaNg";
  var data = {
    "entry.437607017": userid,
    "entry.2083587933": timestamp,
    "entry.324872964": info,
    "entry.1911452841": eventname,
    "entry.280776174": target,
    "entry.1156172868": view,
    "entry.524730173": component,
    "entry.1822129368": log_version,
    "entry.1912000873": dv
  };
  var params = [];
  var key = null;
  for (key in data) {
    params.push(key + "=" + encodeURIComponent(data[key]));
  }
  // Submit the form using an image to avoid CORS warnings; warning may still happen, but log will be sent. Go check result in Google Form
  (new Image).src = "https://docs.google.com/forms/d/" + formid +
     "/formResponse?" + params.join("&");
}

export {loggingjs}