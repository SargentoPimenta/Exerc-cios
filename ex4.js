// filterMovies.js
function filterMoviesByGenre(movies, genre) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(movies) || movies.length === 0) {
        reject(new Error('A lista de filmes está vazia ou não é um array.'));
      }
  
      const filteredMovies = movies.filter((movie) => movie.genre === genre);
  
      if (filteredMovies.length === 0) {
        reject(new Error(`Não foram encontrados filmes do gênero ${genre}.`));
      }
  
      resolve(filteredMovies);
    });
  }
  
  module.exports = filterMoviesByGenre;

  
  // app.js
const filterMoviesByGenre = require('./filterMovies');

const movies = [
  { title: 'Filme 1', genre: 'Ação' },
  { title: 'Filme 2', genre: 'Comédia' },
  { title: 'Filme 3', genre: 'Ação' },
  { title: 'Filme 4', genre: 'Drama' },
  { title: 'Filme 5', genre: 'Ação' },
];

const genreToFilter = 'Ação';

filterMoviesByGenre(movies, genreToFilter)
  .then((filteredMovies) => {
    console.log(`Filmes do gênero ${genreToFilter}:`);
    console.log(filteredMovies);
  })
  .catch((error) => {
    console.error(error.message);
  });
