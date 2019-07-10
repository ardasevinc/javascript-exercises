const repeatString = function(string, n) {
    let smallString = string;
    
    if (n === 0) return "";
    else if (n === 1) return string;
    else if (n > 1) {
        for(let i=0; i<n-1; i++) {
            string += smallString;
        }
        return string;
    }
    else return "ERROR";
}

module.exports = repeatString
