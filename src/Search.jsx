import React from 'react';
import FilterSidebar from './Filtersidebar';
import ProfileCard from './Profilecard';
import './Search.css';

function Search() {
  const profiles = [
    {
      id: 'SV31199',
      name: 'Shweta',
      age: 28,
      height: 5.5,
      religion: 'Hindu',
      caste: 'Maratha',
      motherTongue: 'Marathi',
      education: 'MS (Engineer)',
      location: 'Navi Mumbai, India',
      occupation: 'Software Consultant',
      annualIncome: 'Does not matter',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 'SV31124',
      name: 'Rithuvarna',
      age: 27,
      height: 5.7,
      religion: 'Hindu',
      caste: 'Brahmin',
      motherTongue: 'Konkani',
      education: 'Post Graduate, LLM',
      location: 'Thrissur, India',
      occupation: 'Legal Professional',
      annualIncome: 'Rs 10,00,000 - 15,00,000',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="app-container">
      <FilterSidebar />
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default Search;
