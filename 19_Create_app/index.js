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