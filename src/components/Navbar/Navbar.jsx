import React from 'react';


function NavScrollExample() {

  return(

<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b>CW</b>HOME</a>
    <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about"><b>CW</b>ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/resume"><b>CW</b>RESUME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/portfolio"><b>CW</b>PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact"><b>CW</b>CONTACT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href='/' tabIndex="-1" aria-disabled="true"
            >Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
};
export default NavScrollExample;


