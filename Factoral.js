const Factorial = (num) => {
    //Base case
    if (num === 1) {
        return 1;
    }

    return num * Factorial(num - 1);
};

console.log(Factorial(5));