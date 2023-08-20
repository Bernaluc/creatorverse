import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

  return(
    <nav aria-label="breadcrumb">
      <ul>
        <li><strong>CREATORVERSE</strong></li>
      </ul>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-creator" role="button">Add Creator</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation;
