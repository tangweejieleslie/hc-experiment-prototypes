import {loggingjs} from "../../public/logging.js";

function logging(event, customName, customInfo){

    console.log("Logging...");
    console.log("Event Details: " ,event);
    console.log("Details for Google Form: ", customInfo );
    loggingjs.logEvent(event, customName, customInfo);
}

export default logging