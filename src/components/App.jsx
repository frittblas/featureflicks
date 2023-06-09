import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShowMovies from './ShowMovies';
import Welcome from './Welcome';
import Footer from './Footer';
import About from './About';
import ShowSeats from './ShowSeats';
import MovieDetail from './MovieDetail';
import ShowScreenings from './ShowScreenings';
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (<>
    <main>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Feature flicks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
              <Nav.Link as={Link} to="/screenings">Screenings</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />}> </Route>
          <Route path="/movies" element={<ShowMovies />}> </Route>
          <Route path="/movie-detail/:slug" element={<MovieDetail />} />
          <Route path="/screenings" element={<ShowScreenings />}> </Route>
          <Route path="/booking/:id" element={<ShowSeats />} />
          <Route path="/about" element={<About />}> </Route>
        </Routes>
      </div>
    </main>
    <Footer />
  </>
  );
}
