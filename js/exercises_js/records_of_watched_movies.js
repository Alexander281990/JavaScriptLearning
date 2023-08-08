"use strict";

// 1

let ansver;

// функция постоянно задает вопрос один и тот-же вопрос, если пользователь ничего не ввел, ввел не цифры, или 
// сразу нажал на кнопку "ok"
function start() {
    ansver = +prompt("Скодько фильмов вы уже посмотрели?", "");
    while(ansver == "" || ansver == null || isNaN(ansver)) {
            // метод isNaN(answer) вернет правду, если в answer нехадится НЕ число
            ansver = +prompt("Скодько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    "count": ansver,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false,
};

// 3

for(let i = 0; i < 2; i ++) {
    const lastMovieFirstQuestion = prompt("Один из просмотренных последних фильмов", ""),
          filmScoreFirst = +prompt("На сколько оцените его?", "");

    personalMovieDB.movies[lastMovieFirstQuestion] = filmScoreFirst;
}
// или можно записать по другому
// personalMovieDB["movies"][lastMovieFirstQuestion] = filmScoreFirst; // так тоже работает
// personalMovieDB["movies"][lastMovieSecondQuestion] = filmScoreSecond; // так тоже работает
// а вот так уже не работает
// слово movies нужно писать в кавычках
// personalMovieDB[movies][lastMovieFirstQuestion] = filmScoreFirst; // не работает
// personalMovieDB[movies][lastMovieSecondQuestion] = filmScoreSecond; // не работает
console.log(personalMovieDB);
