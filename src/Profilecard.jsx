import React from 'react';
import './Profilecard.css';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img
          src={profile.image}
          alt={profile.name}
        />
        <button className="view-full-profile-btn">View Full Profile</button>
      </div>
      <div className="profile-details">
        <h2>
          <span className="profile-id">{profile.id}</span> | {profile.name}
        </h2>
        <ul style={{ listStyleType: 'none', padding: 0, margin: '15px' }}>
          <li><strong>Age / Height:</strong> {profile.age} Years, {profile.height}ft</li>
          <li><strong>Religion:</strong> {profile.religion}</li>
          <li><strong>Caste:</strong> {profile.caste}</li>
          <li><strong>Mother Tongue:</strong> {profile.motherTongue}</li>
          <li><strong>Education:</strong> {profile.education}</li>
          <li><strong>Location:</strong> {profile.location}</li>
          <li><strong>Occupation:</strong> {profile.occupation}</li>
          <li><strong>Annual Income:</strong> {profile.annualIncome}</li>
        </ul>
      </div>
      <div className="profile-actions">
        <button className="shortlist-btn">⭐ Shortlist</button>
        <button className="like-btn">✔ Like</button>
        <button className="unlike-btn">✖ Unlike</button>
      </div>
    </div>
  );
};

export default ProfileCard;
