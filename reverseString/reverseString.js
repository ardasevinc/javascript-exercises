const reverseString = function(string) {
    splitString = string.split("");
    reversedString = "";

    for (let i = splitString.length - 1; i >= 0; i--) {
        reversedString += splitString[i];
    }
    return reversedString;
}

module.exports = reverseString
