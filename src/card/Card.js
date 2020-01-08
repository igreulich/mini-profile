import React from 'react';

import './Card.css';
import avatar from './ewok-avatar-icon.png';

const ProfileCard = () => (
  <div className="profile-card--container">
    <div className="profile-card--avatar-container">
      <img className="profile-card--avatar-image" src={avatar} alt="Profile Avatar" />
    </div>
    <div className="profile-card--info-container">
      <div className="profile-card--info-profile">
        <p className="profile-card--fullname">Ian Greulich</p>
        <p className="profile-card--title">Tall Human</p>
      </div>
      <div className="profile-card--info-content">
        <p className="profile-card--content-title">Content Title</p>
        <p className="profile-card--content">Content</p>
      </div>
    </div>
  </div>
);

export default ProfileCard;
