import {loggingjs} from "../../public/logging.js";

function logging(event, otherDetails){

    console.log("Logging...");
    console.log("Event Details: " ,event);
    console.log("Details for Google Form: ", otherDetails );
    loggingjs.logEvent(event, 'null', otherDetails);
}

export default logging