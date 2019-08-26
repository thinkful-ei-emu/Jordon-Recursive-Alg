// const reverseString = (str) => {
//     //Base Case
//     if (str === '') {
//         return '';
//     }
//     //General Case
//     return reverseString(str.substr(1)) + str.charAt(0);


// }

// reverseString('Abc')

// function reverseString(str) {
//     if (str === "")
//         return "";
//     else
//         return reverseString(str.substr(1)) + str.charAt(0);
// }
// reverseString("hello");

// const reverseStr = function(str) { // //Base case // if(str.length === 0){
// return ''; // } // //General case
// let newChar = str[str.length-1]; // return newChar + reverseStr(str.slice(0, str.length-1)); // };