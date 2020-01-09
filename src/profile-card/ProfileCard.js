import React from 'react';

import ProfileCardAvatar from './ProfileCardAvatar';
import ProfileCardProfile from './ProfileCardProfile';

import './ProfileCard.css';

const ProfileCard = () => (
  <div className="profile-card--container">
    <ProfileCardAvatar />
    <div className="profile-card--info-container">
      <ProfileCardProfile />
      <div className="profile-card--info-content">
        <p className="profile-card--content-title">Content Title</p>
        <p className="profile-card--content">Content</p>
      </div>
    </div>
  </div>
);

export default ProfileCard;
