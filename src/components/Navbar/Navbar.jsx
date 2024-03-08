import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Resume from '../../assets/Resume.pdf';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function NavScrollExample() {
  const [isNavbarFixed, 
         setIsNavbarFixed] = 
  useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = 
      window.scrollY > 0;
      setIsNavbarFixed(isScrolled);
    };

    window.addEventListener
    ('scroll', handleScroll);

    return () => {
    window.removeEventListener
    ('scroll', handleScroll);
    };
  }, 
  []);
  
  // State to toggle the visibility of the navbar collapse
  const [isNavOpen, setIsNavOpen] = 
  useState(false);

  // Function to toggle the navbar collapse
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" 
      style={{ 
      position: isNavbarFixed ? 
      'fixed' : 'static', 
      top: 0, width: '100%', 
      zIndex: 1000 
      }} 
      className='shadow'>
        <Container fluid>
          <Navbar.Brand href="/">
          <b>CW</b>HOME</Navbar.Brand>
          <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={toggleNav} />
          <Navbar.Collapse 
          id="basic-navbar-nav" 
          className={`${isNavOpen ? 
          'show' : ''}`}
          >
          <Nav className="me-auto">
          <Nav.Link href="/about">
              About</Nav.Link>
          <Nav.Link href="/resume">
              Resume</Nav.Link>
          <Nav.Link href="/portfolio">
              Portfolio</Nav.Link>
          <Nav.Link href="/contact">
              Contact</Nav.Link>
          <Nav.Link 
              href={Resume}>
              <button 
              className='w3-button w3-light-grey' 
              style={{fontSize:'12px'}}>
                RESUME DOWNLOAD
              </button>
          </Nav.Link>        
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
