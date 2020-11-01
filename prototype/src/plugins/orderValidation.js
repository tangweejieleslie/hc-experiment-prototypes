import {loggingjs} from "../../public/logging.js";

export default function validate(order, orderValue, date, time, trialID) {
    // const setA = new Set([25, "Chicken"]);
    // console.log(order);

    const trials = {
        "A": {
            "Chicken Mushroom 'O": 35,
            "Chicken Wing": 35,
            "Chicken Nugget OnStik": 35,
            // "Cheezy Chicken Sausage OnStik": 25
        },
        "B": {
            "Curry 'O": 35,
            "Sardine 'O": 35,
            "Chicken Mushroom 'O": 35,
            // "Green Bean Feel'in": 25
        },
        "C": {
            "Set A: Sambal Fish": 30,
            "Yam Feel'in": 35,
            "Set B: Steamed Fish With Seaweed Sauce": 30,
            // "Sotong Head OnStik": 25,
        },
        "Sample": {
            // "Curry 'O": 25,
            "Carrot K8": 125
        }
    }

    // console.log(trials["A"]);

    const trial = trials[trialID]

    // Validate Order Value > $150
    if (orderValue < 150) {
        // return "Price below $150"
        // alert("Price below $150")
        return "Price below $150"
    }


    // Validate Order Time/Date is on 30 Nov 2020, 12pm
    if (date != "2020-11-30") {
        // alert("Wrong Delievery Date Set, expecting 30 Nov 2020")
        return "Wrong Delievery Date Set, expecting 30 Nov 2020"
    }

    if (time != "12:00") {
        // alert("Wrong Delivery Time Set, expecting 12pm")
        return "Wrong Delivery Time Set, expecting 12pm"
    }

    // Validate Order Items
    for (let key in order) {

        if (order[key] != trial[key]) {
            return "Wrong Delivery Orders, double check your cart";
        }
    }
    loggingjs.logEvent(undefined, "EndTask", {
          Info: "End of Task",
          Target: "OrderNow",
          View: "MenuView",
          Component: "OrderButton",
          DV: "1",
    });
    return "Order completed! Please close this window and return to Qualtrics/Mechanical Turk.";


}

// let o = {
//     "Curry 'O": 25,
//     "Sardine 'O": 25
// }

// let p = {
//     "Curry 'O": 24,
//     "Sardine 'O": 25
// }

// // Tests
// console.log(validate(o, "A")); // Expects True
// console.log(validate(p, "A")); // Expects False
// // console.log(validate(p, "A"));