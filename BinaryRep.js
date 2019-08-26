const BinaryRep = (num) => {
    if (num <= 0) {
        return '';
    }

    let binary = num % 2;
    return BinaryRep(Math.floor(num / 2)) + binary;
}

console.log(BinaryRep(5));