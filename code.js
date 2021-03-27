"use strict";
// below code (which is a function declaration) can be swapped with function expression (block below which is not commented out), they both work but can be used in different ways
// function helloWorld() {
//     return "Hello, World!";
// }

var helloWorld = function() {
    return "Hello, World!";
}

function sayHello(x) {
     if ((typeof x === 'string' && x.trim().length > 0) || typeof x === 'number' ) {
        return "Hello, " + x + "!";
    } else {
        return 'Hello, World!';
    }
}

// // why doesn't this code work?
// function sayHello(x) {
//     (typeof x === 'string') ? "Hello, " + x + "!" : 'Hello, World!';
// }

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