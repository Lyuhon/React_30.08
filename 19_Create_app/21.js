// 21 Лекция
// оператор сравнения может возвращать первое значение на
// котором остановились вычисления

console.log(NaN || 2 || undefined); // und


console.log(NaN && 2 && undefined); // nan


console.log(1 && 2 && 3); // 3


console.log(!1 && 2 || !3); // false


console.log(25 || null && !3); // false


console.log(NaN || null || !3 || undefined || 5); // 5


console.log(NaN || null && !3 && undefined || 5); // 5


console.log(5 === 6 && 3 > 1 || 5); // 5

/////

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
}