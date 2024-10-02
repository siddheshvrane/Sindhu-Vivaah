import React from 'react';
import './Card.css';

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon-container">
        <i className={`fas ${icon}`}></i>
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;