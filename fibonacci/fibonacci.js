const fibonacci = function(n) {
    if (n === 0) return 0;
    else if (n === 1 || n === 2) return 1;
    else if (n < 0) return 'OOPS';
    else return fibonacci(n-1) + fibonacci(n-2);
}

module.exports = fibonacci
