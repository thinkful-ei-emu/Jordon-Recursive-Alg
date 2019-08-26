const powerCalculator = (int, exp) => {
    if (exp < 0) {
        return 'exponent should be >= 0';
    }
    powerCalculator(int, exp - 1);
    return Math.pow(int, exp)
}

console.log(powerCalculator(10, 2));