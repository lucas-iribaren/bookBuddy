import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/favorites">Favorites</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </nav>
);

export default NavBar;