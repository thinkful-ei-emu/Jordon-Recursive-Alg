function powerCalculator(b, e) {
    if (e < 0) {
        return 'exponent should be >= 0'
    }
    if (e == 0) {
        return 1
    }
    else { return b * (powerCalculator(b, e - 1)) }
}

console.log(powerCalculator(10, 3))