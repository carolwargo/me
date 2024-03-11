import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Assuming this is how you import MDB styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavScrollExample() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><b>CW</b></a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">RESUME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact"><b>CW</b>CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavScrollExample;

