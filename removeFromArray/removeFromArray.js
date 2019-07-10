const removeFromArray = function(arr, args) {
    if (arguments.length === 2) {
        arr.splice(arr.indexOf(args), 1);
        return arr;
    }
    else if (arguments.length > 2) {
        let indexOfRemoved;

        for (let i=1; i<arguments.length; i++) {
            if (arr.indexOf(arguments[i]) === -1) continue;
            else {
                indexOfRemoved = arr.indexOf(arguments[i])
                arr.splice(indexOfRemoved, 1);
            }
        }
        return arr;
    }
    else return console.error("Illegal argument");
}

module.exports = removeFromArray
