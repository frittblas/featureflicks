import { useStates } from '../utilities/states';
import { Link } from 'react-router-dom';

export default function ScreeningList() {
  const s = useStates('main');
  /*
    s.movies.map(({ id, title }) => {
  
      console.log("movie id and name: ", id, title);
  
    });*/

  let allMovies = [];
  s.movies.map((movie) => {

    console.log("movie id and name: ", movie.id, movie.title, movie.description.posterImage);

    allMovies.push(movie);

  });

  console.log("allMovies ", allMovies);

  //const { title, description } = movie;
  //const { length, categories, posterImage } = description;

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

        {/*<img src={'https://cinema-rest.nodehill.se' + d.posterImage} />*/}
        <p>movieId {movieId}</p>
        {auditoriumId === 1 ? <p>Lilla salen</p> : <p>Stora salen</p>}
        <hr />
      </div>
    </Link>
    )}
  </>;
}
