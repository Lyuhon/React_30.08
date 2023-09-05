const numberOfFilms = +prompt('Сколько фильмов?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    geners: [],
    privat: false
};

const question_1 = prompt('Послежний фильм?'),
    question_2 = prompt('Оценка?');

const question_3 = prompt('Послежний фильм?'),
    question_4 = prompt('Оценка?');

personalMovieDB.movies[question_1] = question_2;
// можно было записать personalMovieDB.movies.question_1 = ...
// но так бы не работало с пробелами
personalMovieDB.movies[question_3] = question_4;

console.log(personalMovieDB);
document.write(personalMovieDB);

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


// 22 Лекция - Циклы

let wh = 50;

//
while (wh <= 55) {
    console.log(wh);
    wh++;
}

//
do {
    console.log(wh);
    wh++;
}
while (wh < 100);

//
for (let i = 1; i < 8; i++) {
    console.log(`i = ${i}`);
    if (i == 4) {
        console.log('приплыли');
        break;
        // continue - пропуск
    }
}