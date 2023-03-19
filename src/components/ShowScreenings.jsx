import { useEffect } from 'react';
import { useStates } from '../utilities/states';
import { kebabify } from '../utilities/kebabify';
import ScreeningList from './ScreeningList';


export default function ShowScreenings() {

  const s = useStates('main', {
    screenings: []
  });

  useEffect(() => {
    (async () => {
      // fetch all screenings
      let screenings = await (await fetch('/api/screenings')).json();
      // add a slug to be used in url routes to each movie
      for (let screening of screenings) {
        screening.slug = kebabify(screening.time);
      }
      // store the screenings in our state variable
      s.screenings = screenings;
    })();
  }, []);

  return s.screenings.length === 0 ? null : <>
    <ScreeningList />
  </>;

}