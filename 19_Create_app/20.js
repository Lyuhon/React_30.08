// 20 Лекция

if (4 === '4') { // можно поставить условие 1+ то будет правда
    console.log('===');
} else {
    console.log('!==');
}

const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('too much');
} else {
    console.log('всё хуйня, ОК');
}

// тинарный оператор - знак ?
(num === 50) ? console.log('тру') : console.log('не тру');

//switch - только строгое соответствие 

number = 69;

switch (number) {
    case 49:
        console.log('false');
        break;
    case 100:
        console.log('false');
        break;
    case 50:
        console.log('Угадал');
        break;
    default:
        console.log('Не сегодня');
        break;
}