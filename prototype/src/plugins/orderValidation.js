// export default function(){

// }


function validate(order, trialID) {
    // const setA = new Set([25, "Chicken"]);
    const trials = {
        "A": {
            "Curry 'O": 25,
            "Sardine 'O": 25
        }

    }

    const trial = trials[trialID]

    for (let key in order) {

        if (order[key] != trial[key]) {
            return false;
        }
    }
    return true;


}

let o = {
    "Curry 'O": 25,
    "Sardine 'O": 25
}

let p = {
    "Curry 'O": 24,
    "Sardine 'O": 25
}

// Tests
console.log(validate(o, "A")); // Expects True
console.log(validate(p, "A")); // Expects False
// console.log(validate(p, "A"));