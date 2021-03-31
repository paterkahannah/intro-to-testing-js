"use strict";
// below code (which is a function declaration) can be swapped with function expression (block below which is not commented out), they both work but can be used in different ways
//pwd function helloWorld() {
//     return "Hello, World!";
// }

var helloWorld = function() {
    return "Hello, World!";
}

function sayHello(x) {
     if ((typeof x === 'string' && x.trim().length > 0) || typeof x === 'number' ) {
        return "Hello, " + x + "!";
    }
        return 'Hello, World!';
}

function isFive(x) {
    return parseInt(x) === 5;
}

function isEven(x) {
    return parseInt(x) % 2 === 0;
}

function isVowel(x) {
    return (/^[aeiou]$/i).test(x);
}

function add (x, y) {
    return parseInt(x) + parseInt(y);
}