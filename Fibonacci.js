// const fibonacci = (n) => {
//     //Base case
//     if (result === 0) {
//         return 0;
//     }

//     function mth(num) {
//         if (num === 0) {
//             return 0;
//         }
//         if (num === 1) {
//             return 1;
//         }
//         return (num - 1) + (num - 2);
//     }

//     return fibonacci(n - 1);

// }

// console.log(fibonacci(7));

const fibonacci = (num) => {
    if (num < 2)
        return num;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1))
console.log(fibonacci(7))
console.log(fibonacci(8))