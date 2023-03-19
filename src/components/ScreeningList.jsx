import { useStates } from '../utilities/states';
import { Link } from 'react-router-dom';

export default function ScreeningList() {
  const s = useStates('main');

  return <>
    {s.screenings.map(({ id, time, movieId, auditoriumId }) => <Link
      to={'/booking/' + id}>
      <div className="screening">

        <h2>{new Intl.DateTimeFormat('sv-SE', {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(new Date(time))}</h2>

        {s.movies[movieId - 1] === undefined ? <p>"Loading"</p> :
          <img src={'https://cinema-rest.nodehill.se' + s.movies[movieId - 1].description.posterImage} />}
        <p>{s.movies[movieId - 1] === undefined ? "Loading" : s.movies[movieId - 1].title}</p>
        {auditoriumId === 1 ? <p>Lilla salen</p> : <p>Stora salen</p>}
        <hr />
      </div>
    </Link>
    )}
  </>;
}
