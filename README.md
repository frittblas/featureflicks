# feature flicks

School assignment nr 2 (frontend development) by me, Hans Strömquist

Using React, Vite, react-bootstrap and react-router.

First install:

npm install

Then run:

npm run dev

Started 2023-03-17


## Some info:

This app is responsive (using react-bootstrap).

I used the utilities that were shown from the lectures:
(auto-key-lists, generate-booking-number, kebabify, states)

I ended up using useStates instead of useState (although I learned how to use useState + props).

## Regarding the components:

There are 11 components that I put in the folder src/components.
I tried to make each component just do one thing.

* About:
A simple component just returning a small "about"-section.

* App:
 he starting point. Here I set up the Navbar and all the routes.

* DisplaySeats:
 This component was taken from the lecture and slightly expanded to include
 getting a booking number and the ability to go back to the screening page.
 I did not have time to implement all the requested features here.

* Footer:
 Simple footer component that sticks to the bottom.

* MovieDetail:
 Simple component showing details of a specific movie.

* MovieList:
 Shows all the movies as a grid using react-bootstraps Card, Row, Col.
 All the movies are "Links" and can be clicked, to get to the detailed view.
 The grid is responsive, showing 1, 3 or 5 movies per row depending on screensize.
 It gets called by ShowMovies.

* ScreeningList:
 This component shares state with ShowScreenings (s.selectedItem) using useStates and
 generates a list (that can be filtered by category) of movie screenings. If a screening
 is clicked, you will go to the correct booking page (using route /booking/:id).

* ShowMovies:
 Here the movies are fetched (with useEffect). Then this component shows MovieList (above).

* ShowScreenings:
 This component fetches all movies and screenings (and stores in shared state). It then sets up
 a dropdown menu (to select categories). The state-variables (s.movies[], s.screenings[] and s.selectedItem)
 are then picked up by the ScreeningList component.

* ShowSeats:
 This component uses useParams() to get the correct id to send to DisplaySeats.

* Welcome:
 Simple component welcoming the customer.
  

That is all.

/Hans