import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  <main>
    <h1>BOOKSTORE</h1>
    <ul>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/Categories">CATEGORIES</Link>
      </li>
    </ul>
  </main>;
};

export default Navbar;
