"use strict";
//Literal types
let myName;
let userName;
userName = 'Dave';
// functions 
const add = (a, b) => {
    return a + b;
};
const greet = (message) => {
    console.log(message);
};
greet('Hello Bashir');
greet(add(45, 85));
let substract = function (c, d) {
    return c - d;
};
greet(substract(5, 2));
//
const multiply = function (c, d) {
    return c * d;
};
greet(multiply(4, 2));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a, b, c = 5) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
greet(addAll(2, 2));
greet(sumAll(2, 2));
//Rest parameters
const total = (a, ...nums) => {
    return a * nums.reduce((prev, curr) => prev + curr, 0);
};
greet(total(2, 1, 4, 6, 5));
// never type == error 
const createError = (errMeg) => {
    throw new Error(errMeg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return 'string';
    }
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
