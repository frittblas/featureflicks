import { useEffect } from 'react';
import { useStates } from '../utilities/states';
import ScreeningList from './ScreeningList';

export default function ShowScreenings() {

  const s = useStates('main', {
    screenings: [],
    movies: [],
    lol: 3
  });

  useEffect(() => {
    (async () => {
      // fetch all screenings and movies
      let screenings = await (await fetch('/api/screenings')).json();
      s.screenings = screenings;
      let movies = await (await fetch('/api/movies')).json();
      s.movies = movies;
    })();
  }, []);

  return s.screenings.length === 0 ? null : <>
    <ScreeningList />
  </>;

}