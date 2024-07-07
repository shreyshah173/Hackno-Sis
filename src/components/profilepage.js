import React from 'react';
 // Update this to the correct path

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        
        <h1 className="profile-username">QXyTP8Wlu8</h1>
      </div>
      <div className="profile-body">
        <div className="profile-sidebar">
          <ul>
            <li className="active">Basic Info</li>
            <li>Points</li>
            <li>Account</li>
            <li>Lab</li>
            <li>Privacy</li>
            <li>Notifications</li>
          </ul>
        </div>
        <div className="profile-content">
          <h2>Basic Info</h2>
          <ul>
            <li>
              <span>Name</span>
              <span>Your name</span>
              <a href="#">Edit</a>
            </li>
            <li>
              <span>Gender</span>
              <span>Not provided</span>
              <a href="#">Edit</a>
            </li>
            <li>
              <span>Location</span>
              <span>Your location</span>
              <a href="#">Edit</a>
            </li>
            <li>
              <span>Birthday</span>
              <span>Your birthday</span>
              <a href="#">Edit</a>
            </li>
            <li>
              <span>Summary</span>
              <span>Tell us about yourself (interests, experience, etc.)</span>
              <a href="#">Edit</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
