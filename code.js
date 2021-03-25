// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(x) {
    if (typeof x === 'string') {
        return "Hello, " + x + "!";
    } else {
        return 'Hello, World!';
    }
}

function isFive(x) {
    return parseInt(x) === 5;
}

function isEven(x) {
    return parseInt(x) % 2 === 0;
}

function isVowel(x) {
    return x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U';
}

function add (x, y) {
    return parseInt(x) + parseInt(y);
}






// function sayHello(x) {
//     if (x === undefined) {
//         return 'Hello, World!';
//     } else if (x === true) {
//         return 'Hello, World!';
//     } else if (x === false) {
//         return 'Hello, World!';
//     } else {
//         return "Hello, " + x + "!";
//     }
// }