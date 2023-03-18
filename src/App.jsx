import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShowMovies from './ShowMovies';
import Welcome from './Welcome';
import ShowSeats from './ShowSeats';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (<>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Feature flicks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/screenings">Screenings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ShowMovies />
    <div>
      <Routes>
        <Route path="/" element={<Welcome />}> </Route>
        <Route path="/movies" element={<ShowMovies />}> </Route>
        <Route path="/screenings" element={<ShowSeats />}> </Route>
      </Routes>
    </div>
  </>
  );
}
