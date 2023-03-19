import { useStates } from '../utilities/states';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

export default function MovieList() {
  const s = useStates('main');
  return (<div className="aMovie" >
    <Row xs={1} sm={3} md={5}>
      {s.movies.map(({ slug, title, description: d }) => (
        <Col key={slug}>
          <Link to={'/movie-detail/' + slug}>
            <Card>
              <Card.Img variant="top" src={'https://cinema-rest.nodehill.se' + d.posterImage} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  </div >
  );
}
