"use strict"

let numberOffilms;
function start() {
    numberOffilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
    while (numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)) {
        numberOffilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
    }
}
// start();

const personalMovieDB = {
    count: numberOffilms,
    movies: {},
    acrors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error');
            i--;
        }
        
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");  
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB >=30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
// detectPersonalLevel();
function showDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
// showDB(personalMovieDB)

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();
console.log(personalMovieDB);