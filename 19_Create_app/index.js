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

