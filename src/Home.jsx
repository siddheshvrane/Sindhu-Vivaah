import React from 'react';

const Home = ({ currentLang }) => {
  return (
    <div>
      <h1>{currentLang.home.title}</h1>
      <p>{currentLang.home.subtitle}</p>
      <button>{currentLang.home.button}</button>
    </div>
  );
};

export default Home;
