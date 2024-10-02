import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ currentLang, handleLanguageChange, toggleTheme, theme }) => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  // Toggle the language dropdown
  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Sindhu-Vivaah</div>
      <ul className="nav-links">
        {/* Use Link instead of href for proper routing */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register" className="btn-nav">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
