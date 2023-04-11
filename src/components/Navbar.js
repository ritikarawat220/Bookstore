import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  <nav>
    <h1>BOOKSTORE</h1>
    <ul>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/Categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>;
};

export default Navbar;
