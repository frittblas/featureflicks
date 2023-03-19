import { useStates } from '../utilities/states';
import { Link } from 'react-router-dom';

export default function ScreeningList() {
  const s = useStates('main');
  return <>
    {s.screenings.map(({ slug, time, movieId, auditoriumId }) => <Link
      to={'/booking/' + slug}>
      <div className="screening">
        <h3>{time}</h3>
        {/*<img src={'https://cinema-rest.nodehill.se' + d.posterImage} />*/}
        <p>movieId {movieId}</p>
        <p>auditoriumId {auditoriumId}</p>
        <hr />
      </div>
    </Link>
    )}
  </>;
}
