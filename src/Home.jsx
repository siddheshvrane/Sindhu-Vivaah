import React from 'react';
import Card from './Card.jsx';
import './Home.css';

const Home = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>Find your BetterHalf here.</h1>
          <p>मांगल्यं तन्तुनानेना मम जीवनहेतुना | कण्ठे बध्नामि शुभगे त्वं जीवशरदां शतम् ||</p>
          <a href="/register" className="btn-cta">Register</a>
        </div>
        <div className="hero-image"></div>
      </header>

      {/* Content Section */}
      <div className="main-container">
        <h1 className="main-heading">Find your Special Someone</h1>
        <div className="cards-container">
        <Card
          icon="fa-pencil-alt" // You can change this as per your icon library
          title="Sign Up"
          description="Register for free & put up your Matrimony Profile"
        />
        <Card
          icon="fa-user-check"
          title="Connect"
          description="Select & Connect with Matches you like"
        />
        <Card
          icon="fa-comment"
          title="Interact"
          description="Become a Premium Member & Start a Conversation"
        />
          <div>
            <h3>Sign Up</h3>
            <p>Register for free & put up your Matrimony Profile</p>
          </div>
          <div>
            <h3>Connect</h3>
            <p>Select & Connect with Matches you like</p>
          </div>
          <div>
            <h3>Interact</h3>
            <p>Become a Premium Member & Start a Conversation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
