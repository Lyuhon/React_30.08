'use strict';

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('Hello!');

function calc(a, b) {
    return (a + b);
}

console.log(calc(10, 11));
console.log(calc(10, 111));

let calcRes = calc(5, 4);
console.log(`var as a function ${calcRes}`);

let funcInVar = function () {
    console.log('test funcInVar');
};
funcInVar();


/* => */
const calculatorPlus = (a, b) => a + b;
//или так
//const calculatorPlus = (a, b) => {return a + b};
console.log(calculatorPlus(11, 69));
