const palindromes = function(string) {
    let removed = removePunctuationWhitespace(string);
    let reversed = reverseString(removed.toLowerCase());
    let comparisonString = removePunctuationWhitespace(string).toLowerCase();

    if (reversed === comparisonString) return true;
    else return false;
} 

function reverseString(string) {
    let splitString = string.split('');
    let newString = '';

    for (let i=splitString.length-1; i>=0; i--) {
        newString += splitString[i];
    }
    return newString;
}

function removePunctuationWhitespace(string) {
    let pattern = /[A-Za]/gi;
    let result = Array.from(string.matchAll(pattern));
    let virginChars = '';

    result.forEach((arrElement) => virginChars += arrElement[0]);
    return virginChars; 
}

module.exports = palindromes
