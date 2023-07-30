"use strict";

// 1

const ansver = +prompt("Скодько фильмов вы уже посмотрели?", "");

// 2

const personalMovieDB = {
    "count": ansver,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false,
};

// 3

const lastMovieFirstQuestion = prompt("Один из просмотренных последних фильмов", ""),
      filmScoreFirst = +prompt("На сколько оцените его?", ""),
      lastMovieSecondQuestion = prompt("Один из просмотренных последних фильмов", ""),
      filmScoreSecond = +prompt("На сколько оцените его?", "");
personalMovieDB.movies[lastMovieFirstQuestion] = filmScoreFirst;
personalMovieDB.movies[lastMovieSecondQuestion] = filmScoreSecond;
// или можно записать по другому
// personalMovieDB["movies"][lastMovieFirstQuestion] = filmScoreFirst; // так тоже работает
// personalMovieDB["movies"][lastMovieSecondQuestion] = filmScoreSecond; // так тоже работает
// а вот так уже не работает
// слово movies нужно писать в кавычках
// personalMovieDB[movies][lastMovieFirstQuestion] = filmScoreFirst; // не работает
// personalMovieDB[movies][lastMovieSecondQuestion] = filmScoreSecond; // не работает
console.log(personalMovieDB);
