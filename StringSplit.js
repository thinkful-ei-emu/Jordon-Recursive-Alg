const strSplitter = function (str) {
    //Base case
    if (str.length === 0) {
        return '';
    }

    const char = str.charAt(0);

    if (char !== '/') {
        return char + strSplitter(str.slice(1));
    }

    return strSplitter(str.slice(1));

};

console.log(strSplitter('02/20/2020'));