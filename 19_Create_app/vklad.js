// let input = 10000000;
// let percent = 1.91666666667;
// let srok = 24;
// let result;

// for (i = 1; i <= srok; i++) {
//     input = input * percent / 100 + input;
//     result = Math.trunc(input);
//     mln = (result / 1000000);
//     console.log(`#${i}. ${mln}`);
//     input += 500000;
// }


let input = 3000000;
let percent = (0.416 / 100);
let srok = 24;
let profit = 0;

for (i = 1; i <= srok; i++) {
    profit = profit + input * percent;
    console.log(input + profit);
}