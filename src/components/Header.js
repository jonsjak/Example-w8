import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="Details">Details</Link>
        <Link to="/">List</Link>
      </nav>
    </header>
  )
};

export default Header;