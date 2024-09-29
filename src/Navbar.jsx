import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ currentLang, handleLanguageChange, toggleTheme, theme }) => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageClick = (language) => {
    if (currentLang !== language) {
      handleLanguageChange(language);
    }
    setLanguageDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <h1>SindhuVivaah</h1>
      <div className="navbar-links">
        <a href="/">{currentLang.navbar.home}</a>
        <a href="/login">{currentLang.navbar.login}</a>
        <a href="/profile">{currentLang.navbar.profile}</a>
      
      
      <div className="controls">
        {/* Scrollable language dropdown */}
        <div className="language-dropdown-container">
          <button onClick={toggleLanguageDropdown} className="language-button">
            {currentLang === 'en' ? 'English' : 'मराठी'}
          </button>

          {isLanguageDropdownOpen && (
            <div className="language-dropdown">
              <ul className="language-list">
                <li onClick={() => handleLanguageClick('en')}>English</li>
                <li onClick={() => handleLanguageClick('mr')}>मराठी</li>
              </ul>
            </div>
          )}
        </div>

      </div>
      </div>
    </nav>
  );
};

export default Navbar;
