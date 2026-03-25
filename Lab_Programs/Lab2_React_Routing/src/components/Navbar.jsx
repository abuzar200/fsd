import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🚀<span>Lab2</span>Routing
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
