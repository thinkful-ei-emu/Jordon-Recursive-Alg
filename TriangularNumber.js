const TriangularNumber = (n) => {
    if (n === 0) {
        return 0;
    }
    return n + TriangularNumber(n - 1);
}

console.log(TriangularNumber(3));
