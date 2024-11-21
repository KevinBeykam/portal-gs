import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>Portal GS</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
