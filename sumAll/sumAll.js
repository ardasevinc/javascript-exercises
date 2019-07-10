const sumAll = function(a, b) {
    if ((typeof a === "number") && (typeof b === "number")) {
        if (a < 0 || b < 0) return "ERROR";
        else {
            let numBetween = max(a, b) - min(a, b) + 1;
            return (numBetween * (numBetween + 1)) / 2;
        }
    }

    else return "ERROR";
}

function max(x, y) {
    if (x > y) return x;
    else if (y > x) return y;
    else if (x == y) return x;
    else return "COMPARISON ERROR";
}


function min(x, y) {
    if (x > y) return y;
    else if (y > x) return x;
    else if (x == y) return x;
    else return "COMPARISON ERROR";
}

module.exports = sumAll
