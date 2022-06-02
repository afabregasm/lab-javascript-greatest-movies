// The `movies` array from the file `src/data.js`.
const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((film) => {
    return film.director;
  });
  return allDirectors.filter((director, index) => {
    return allDirectors.indexOf(director) === index; 
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergMovies = 0;
  movies.filter((spielbergFilm) => {
    if(spielbergFilm.director === 'Steven Spielberg' && spielbergFilm.genre.includes("Drama")) {
      spielbergMovies += 1;
    }
  });
  return spielbergMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0) {
    return 0;
  }
  const averageScores = movies.reduce((score, movie) => {
    if (!movie.score) {
      return score;
    } else {
      return score + movie.score;
    }
  }, 0);
  let average = averageScores / movies.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((dramaAvg) => {
    return dramaAvg.genre.includes("Drama");
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies));
  moviesCopy.sort((first, second) => {
    if (first.year > second.year) {
      return 1;
    } else {
      return -1;
    }
  });
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titleCopy = JSON.parse(JSON.stringify(movies));
  titleCopy.sort((first, second) => {
    if (first.title > second.title) {
      return 1;
    } else {
      return -1
    }
  });
  const alphabeticTitles = titleCopy.map((movieTitle) => {
    return movieTitle.title;
  });
  return alphabeticTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
