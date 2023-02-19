"use strict";
let myTuple = ['Bashir', 23, true];
let newArr = ['some'];
newArr = myTuple;
let myObj;
myObj = [];
console.log(typeof myObj);
const example = {
    prop1: 'dave',
    prop2: true
};
example.prop1 = 'Bashir';
let evh = {
    name: 'Bashir',
    active: false,
    albums: [195, 165, '5dasdsa']
};
let jhm = {
    name: 'ahammed',
    active: false,
    albums: [195, 16555, '5dasdsahgjhg']
};
const greetGuiterist = (guiterist, secondGuiterRist) => {
    return `Hello ${guiterist.name} and ${secondGuiterRist.name}`;
};
console.log(greetGuiterist(evh, jhm));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
