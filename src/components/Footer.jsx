import React from 'react';

export default function Footer() {
  return (<>
    <footer className="container-fluid text-center bg-primary bg-gradient text-light p-3" style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <div className="row">
        <div className="col">
          © Hans Strömquist, Fältvägen 7, Kristianstad, 2023
        </div>
      </div>
    </footer>
  </>
  );
}