import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="bg-image">
    <nav className="navbar">
      <h1>Creatorverse</h1>
      <div className="links">
        <ul>
          <li> 
          <Link to="/">Home</Link>
          </li><li>
          <Link to="/add-creator">Add Creator</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navigation;
