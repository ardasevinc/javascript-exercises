const caesar = function(string, shift) {
    let splitString = string.split('');
    let caseOfChar = detectCase(string);
    let asciiLower = generateAsciiAlphabet(0);
    let asciiUpper = generateAsciiAlphabet(1);
    let finalString = '';

    for (let i=0; i<splitString.length; i++) {
        caseOfChar = detectCase(splitString[i]);

        if (caseOfChar === 0) {
            finalString += shiftChar(splitString[i], shift, asciiLower);
        }
        else if (caseOfChar === 1) {
            finalString += shiftChar(splitString[i], shift, asciiUpper);
        }
        else {
            finalString += splitString[i];
        }
    }
    return finalString;
}

function makeStringFromArray(stringSplitArray) {
    let newString = '';

    for (let i=0; i<stringSplitArray.length; i++) {
        newString.concat(stringSplitArray[i]);    
    }
    return newString;
}


function detectCase(char) {
    let charCode = char.charCodeAt();
   
    if (charCode <= 'z'.charCodeAt() && charCode >= 'a'.charCodeAt()) return 0;
    else if (charCode <= 'Z'.charCodeAt() && charCode >= 'A'.charCodeAt()) return 1;
    else return -1;
}


function generateAsciiAlphabet(caseSetting) {
    let asciiArr = [];
    let pattern = /[A-Z]/i;
    if (caseSetting === 1) {
        for (let i='A'.charCodeAt(); i<='Z'.charCodeAt(); i++) {
            if (pattern.test(String.fromCharCode(i))) {
                asciiArr.push(i);
            }
        }
        return asciiArr;
    }
    else {
        for (let i='a'.charCodeAt(); i<='z'.charCodeAt(); i++) {
            if (pattern.test(String.fromCharCode(i))) {
                asciiArr.push(i);
            }
        }
        return asciiArr;
    }
}


function shiftChar(char, shiftCount, asciiAlphabet) {
    let shifted;
    let shiftCountNormalized = shiftCount +  asciiAlphabet.indexOf(char.charCodeAt());
    let wantedCharIndex;
    
    if (shiftCountNormalized < 0) {
        shiftCountNormalized += asciiAlphabet.length;
    }

    shiftCountNormalized %= asciiAlphabet.length ;
    return String.fromCharCode(asciiAlphabet[shiftCountNormalized]);
}


module.exports = caesar
