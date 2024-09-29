import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import translations from './translations';
import './App.css'; // Import the CSS with padding for main content


const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Sindhu-Vivaah</div>
        <ul className="nav-links">
          <li><a href="Home">Home</a></li>
          <li><a href="Search">Search</a></li>
          <li><a href="Language">Language</a></li>
          <li><a href="Login">Login</a></li>
          <li><a href="Register" className="btn-nav">Register</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>Find your BetterHalf here.</h1>
          <p>मांगल्यं तन्तुनानेना मम जीवनहेतुना |
            कण्ठे बध्नामि शुभगे त्वं जीवशरदां शतम् || </p>
          <a href="Register" className="btn-cta">Register</a>
        </div>
        <div className="hero-image">
        </div>
      </header>

      {/* Content Section */}
      <section className="content-section">
        <h2>Promoting your business and services with Spoon</h2>
        <p>Engage your customers with great design and a seamless experience.</p>
      </section>
    </div>
  );
}

export default LandingPage;

