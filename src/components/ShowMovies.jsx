import { useEffect } from 'react';
import { useStates } from '../utilities/states';
import { kebabify } from '../utilities/kebabify';
import MovieList from './MovieList';


export default function ShowMovies() {

  const s = useStates('main', {
    movies: []
  });

  useEffect(() => {
    (async () => {
      // fetch all movies from the REST api
      let movies = await (await fetch('/api/movies')).json();
      // add a slug to be used in url routes to each movie
      for (let movie of movies) {
        movie.slug = kebabify(movie.title);
      }
      // store the movies in our state variable
      s.movies = movies;
    })();
  }, []);

  return s.movies.length === 0 ? null : <>
    <MovieList />
  </>;

}