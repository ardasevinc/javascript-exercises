function add (a, b) {
    return a+b;
}

function subtract (a, b) {
    return a-b;
}

function sum (arr) {
    if (arr.length === 0) return 0;
    else if (arr.length === 1) return arr[0];
    else {
        let result = arr.reduce((acc, num) => {
            return acc + num;
        }, 0);
        return result;
    }

}

function multiply (arr) {
    if (arr.length === 0) return 0;
    else if (arr.length === 1) return arr[0];
    else {
        let result = arr.reduce((acc, num) => {
            return acc * num;
        });
        return result;
    } 
}

function power(number, n) {
    if (n === 0) return 1;
    else if (n === 1) return number;
    else {
        let temp = number;
        for (let i=1; i<n; i++) {
            number *= temp;
        } 
        return number;
    }
}

function factorial(n) {
    return (n === 0 | n === 1) ? 1 : n * factorial(n-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
