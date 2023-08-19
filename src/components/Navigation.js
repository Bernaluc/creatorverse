import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <h1>Creatorverse</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add-creator">Add Creator</Link>
      </div>
    </nav>
  );
}

export default Navigation;
