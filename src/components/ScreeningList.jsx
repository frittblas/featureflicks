import { useStates } from '../utilities/states';
import { Link } from 'react-router-dom';

export default function ScreeningList() {
  const s = useStates('main');
  /*
    s.movies.map(({ id, title }) => {
  
      console.log("movie id and name: ", id, title);
  
    });*/

  s.movies.map((movie) => {

    console.log("movie id and name: ", movie.id, movie.title);

  });

  //const { title, description } = movie;
  //const { length, categories, posterImage } = description;

  return <>
    {s.screenings.map(({ id, time, movieId, auditoriumId }) => <Link
      to={'/booking/' + id}>
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
