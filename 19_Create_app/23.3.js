'use strict';

const lines = 6;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

let empty = 5;
let stars = 1;

for (let i = 0; i < lines; i++) {

    for (let k = 0; k < empty; k++) {
        result += ' ';
    }
    empty--;

    for (let j = 0; j < stars; j++) {
        result += '*';
    }
    stars++;
    stars++;
    result += '\n';
}

console.log(result);