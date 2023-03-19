import DisplaySeats from './DisplaySeats';
import { useParams } from 'react-router-dom';

export default function ShowSeats() {

  // read the id param from the url
  const { id } = useParams();

  return <><DisplaySeats screeningId={id} /></>
}