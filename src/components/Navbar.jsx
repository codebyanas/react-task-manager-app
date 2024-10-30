import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={closeNavbar}>
          Task Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Work" className="nav-link" onClick={closeNavbar}>
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Personal" className="nav-link" onClick={closeNavbar}>
                Personal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Shopping" className="nav-link" onClick={closeNavbar}>
                Shopping
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
