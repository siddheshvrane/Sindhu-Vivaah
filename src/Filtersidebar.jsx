import React, { useState } from 'react';
import './Filtersidebar.css';

const Filtersidebar = () => {
  const [gender, setGender] = useState('Female');
  const [height, setHeight] = useState([4, 7]);
  const [age, setAge] = useState([18, 30]);

  return (
    <div className="filter-sidebar">
      <h3>Member Filter</h3>
     
      {/* Search by Keywords */}
      <div className="filter-item">
        <input type="text" placeholder="Search by Keywords" />
        <button className="search-btn">Search</button>
      </div>
     
      {/* Search by ID */}
      <div className="filter-item">
        <input type="text" placeholder="Search by ID" />
        <button className="search-btn">Search</button>
      </div>
     
      {/* Gender Filter */}
      <div className="filter-item">
        <h4>Gender</h4>
        <label>
          <input
            type="checkbox"
            checked={gender === 'Male'}
            onChange={() => setGender('Male')}
          /> Male
        </label>
        <label>
          <input
            type="checkbox"
            checked={gender === 'Female'}
            onChange={() => setGender('Female')}
          /> Female
        </label>
      </div>
     
      {/* Height Slider */}
      <div className="filter-item">
        <h4>Height</h4>
        <input
          type="range"
          min="4"
          max="7"
          step="1"
          value={height[0]}
          onChange={(e) => setHeight([e.target.value, height[1]])}
        />
        <input
          type="range"
          min="4"
          max="7"
          step="1"
          value={height[1]}
          onChange={(e) => setHeight([height[0], e.target.value])}
        />
        <p>{`${height[0]} ft - ${height[1]} ft`}</p>
      </div>
     
      {/* Age Slider */}
      <div className="filter-item">
        <h4>Age</h4>
        <input
          type="range"
          min="18"
          max="65"
          value={age[0]}
          onChange={(e) => setAge([e.target.value, age[1]])}
        />
        <input
          type="range"
          min="18"
          max="65"
          value={age[1]}
          onChange={(e) => setAge([age[0], e.target.value])}
        />
        <p>{`${age[0]} Years - ${age[1]} Years`}</p>
      </div>

      {/* Marital Status */}
      <div className="filter-item">
        <h4>Marital Status</h4>
        <label>
          <input type="checkbox" /> Select All
        </label>
        <label>
          <input type="checkbox" /> Single
        </label>
        <label>
          <input type="checkbox" /> Divorced
        </label>
      </div>

      {/* Religion Filter */}
      <div className="filter-item">
        <h4>Religion</h4>
        <label>
          <input type="checkbox" /> Hindu
        </label>
        <label>
          <input type="checkbox" /> Muslim
        </label>
        <label>
          <input type="checkbox" /> Christian
        </label>
      </div>
    </div>
  );
};

export default Filtersidebar;

