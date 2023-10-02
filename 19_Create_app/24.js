'use strict';


//1
// const numberOfFilms = +prompt('Сколько фильмов?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {

//     },
//     geners: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     let q_1 = prompt('Последний фильм?'),
//         q_2 = prompt('Оценка?');

//     personalMovieDB.movies[q_1] = q_2;
// }
// console.log(personalMovieDB);
// document.write(personalMovieDB);

/*  */
//2
// const numberOfFilms = +prompt('Сколько фильмов?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     geners: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     let q_1 = prompt('Последний фильм?'),
//         q_2 = prompt('Оценка?');

//     if (q_1 != null && q_2 != null && q_1 != '' && q_2 != '' && q_1.length < 50) {
//         personalMovieDB.movies[q_1] = q_2;

//         console.log('Всё ок!');
//     } else {
//         console.log('Не норм');
//         i--;
//     }
// }
// console.log(personalMovieDB);
// document.write(personalMovieDB);


/*  */
//3
const numberOfFilms = +prompt('Сколько фильмов?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let q_1 = prompt('Последний фильм?'),
        q_2 = prompt('Оценка?');

    if (q_1 != null && q_2 != null && q_1 != '' && q_2 != '' && q_1.length < 50) {
        personalMovieDB.movies[q_1] = q_2;

        console.log('Всё ок!');
    } else {
        console.log('Не норм');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Мало фильмов ты посмотрел');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Норм фильмов ты посмотрел, классика');
} else if (personalMovieDB.count > 30) {
    alert('Дофига фильмов ты посмотрел, классика');
} else {
    alert('Ошибка!');
}
console.log(personalMovieDB);
document.write(personalMovieDB);