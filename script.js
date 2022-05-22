"use strict"

const numberOffilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOffilms)

const personalMovieDB = {
    count: numberOffilms,
    movies: {},
    acrors: {},
    genres: [],
    privet: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);