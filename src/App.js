import React from 'react';
import { useState } from 'react';
import './style.css';
const moviesDb = {
  Action: [
    {
      name: 'The Dark knight',
      director: 'Christopher Nolan',
      rating: '9.0/10'
    },
    {
      name: 'The Lord of the Rings: The Return of the King',
      director: 'Peter Jackson',
      rating: '8.9/10'
    },
    {
      name: 'Inception',
      director: 'Christopher Nolan',
      rating: '8.8/10'
    }
  ],
  Animation: [
    {
      name: 'Spirited Away',
      director: 'Hayao Miyazaki',
      rating: '8.6/10'
    },
    {
      name: 'The Lion King',
      director: ' Roger Allers',
      rating: '8.5/10'
    },
    {
      name: 'Spider-Man: Into the Spider-Verse',
      director: 'Bob Persichetti',
      rating: '8.4/10'
    }
  ],
  Biography: [
    {
      name: "Schindler's List",
      director: 'Steven Spielberg',
      rating: '8.9/10'
    },
    {
      name: 'Goodfellas',
      director: 'Martin Scorsese',
      rating: '8.7/10'
    },
    {
      name: 'The Intouchables',
      director: 'Olivier Nakache',
      rating: '8.5/10'
    }
  ],
  comedy: [
    {
      name: 'The Chaos Class',
      director: ' Ertem Egilmez',
      rating: '9.3/10'
    },
    {
      name: '3 idiots',
      director: 'Chetan Bhagat',
      rating: '8.5/10'
    },
    {
      name: 'The Apartment',
      director: 'Billy Wilder',
      rating: '8.3/10'
    }
  ]
};
const moviesList = Object.keys(moviesDb);

export default function App() {
  const [dataBase, setDataBase] = useState('Action');

  function movieClickHandler(movie) {
    setDataBase(movie);
  }
  return (
    <div className="App">
      <h1> Top Rated Movies </h1>
      <p style={{ fontSize: 'smaller' }}>
        These are also my favourite movies too, click a genre to check out
        movies from them.
      </p>

      <div className="btn-container">
        {moviesList.map(movie => (
          <button
            className="btn-genere"
            onClick={() => movieClickHandler(movie)}
          >
            {movie}
          </button>
        ))}
      </div>
      <div className="my-movie-container">
        <ul style={{ paddingInlineStart: '0' }}>
          {moviesDb[dataBase].map(movie => (
            <li key={movie.name}>
              <div className="movie-name"> {movie.name} </div>
              <div className="director"> By {movie.director} </div>
              <div> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
