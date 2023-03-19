import { useStates } from '../utilities/states';
import { Link } from 'react-router-dom';

export default function ScreeningList() {
  const s = useStates('main');

  let currentCategory = "Horror";

  return <>
    {s.screenings.map(({ id, time, movieId, auditoriumId }) => <Link
      to={'/booking/' + id}>
      <div className="screening">

        {s.movies[movieId - 1] && s.movies[movieId - 1].description.categories.includes(currentCategory) ? (
          <>
            <h2>{new Intl.DateTimeFormat('en-US', {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }).format(new Date(time))}</h2>

            <img src={`https://cinema-rest.nodehill.se${s.movies[movieId - 1].description.posterImage}`} />
            <p>{s.movies[movieId - 1].title}</p>
            <p>Length: {s.movies[movieId - 1].description.length} min.</p>
            {/*<p>{s.movies[movieId - 1].description.categories.includes(currentCategory) ? "yes" : "no"}</p>*/}
            {auditoriumId === 1 ? <p>Lilla salen</p> : <p>Stora salen</p>}
            <hr />
          </>
        ) : (
          ""
        )}

      </div>
    </Link>
    )}
  </>;
}

/*
export default function ScreeningList() {
  const s = useStates('main');

  let currentCategory = "comedy";

  return <>
    {s.screenings.map(({ id, time, movieId, auditoriumId }) => {
      if (s.movies[movieId - 1]) {
        if (s.movies[movieId - 1].description.categories.includes(currentCategory)) {

          <Link to={'/booking/' + id}>
            <div className="screening">
              <h2>{new Intl.DateTimeFormat('en-US', {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              }).format(new Date(time))}</h2>

              <img src={`https://cinema-rest.nodehill.se${s.movies[movieId - 1].description.posterImage}`} />
              <p>{s.movies[movieId - 1].title}</p>
              <p>Length: {s.movies[movieId - 1].description.length} min.</p>
              {auditoriumId === 1 ? <p>Lilla salen</p> : <p>Stora salen</p>}
              <hr />
            </div>
          </Link>

        }
      } else {

        <p>Loading</p>

      }
    })}
  </>;
}
*/