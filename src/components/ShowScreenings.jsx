import { useEffect } from 'react';
import { useStates } from '../utilities/states';
import ScreeningList from './ScreeningList';

export default function ShowScreenings() {

  const s = useStates('main', {
    screenings: [],
    movies: [],
    lol: 3,
    selectedItem: "All"
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

  function handleDropdownChange(event) {
    s.selectedItem = event.target.value;
    console.log(`Selected item: ${event.target.value}`);
  }

  return s.screenings.length === 0 ? null : <>
    <div className="myDropDown">
      <select value={s.selectedItem} onChange={handleDropdownChange}>
        <option value="All">All</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
        <option value="Drama">Drama</option>
        <option value="Family">Family</option>
        <option value="Documentary">Documentary</option>
        <option value="Biography">Biography</option>
        <option value="Music">Music</option>

      </select>
    </div>
    <ScreeningList />
  </>;

}