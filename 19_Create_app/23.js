// Циклы в цикле

// for (let i = 0; i < 3; i++) {
//     console.log(`i = ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`${i}) j = ${j}`);
//     }
// }

// моё решение
let treeString = '';

for (let i = 0; i < 8; i++) {
    treeString = treeString + '*';
    console.log(treeString);
}


// препода решение
let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

// метки
first: for (let i = 1; i < 3; i++) {
    console.log(`Level First ${i}`);

    for (let j = 1; j < 3; j++) {
        console.log(`Level Second ${j}`);

        for (let k = 1; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Level Third ${k}`);
        }
    }
}

// Домашка

// Место для первой задачи
function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    for (let i = 20; i > 10; i--) {
        console.log(i);
        if (i === 13) {
            break;
        }
    }


}

// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i <= 10; i++) {

        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;
    while (i <= 16) {
        i++;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }


}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    for (i = 0; i <= 4; i++) {
        arrayOfNumbers[i] = i + 1;
        console.log(arrayOfNumbers);
    }

    // Не трогаем
    return arrayOfNumbers;
}