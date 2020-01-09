import React from 'react';

import ProfileCardAvatar from './ProfileCardAvatar';
import ProfileCardContent from './ProfileCardContent';
import ProfileCardProfile from './ProfileCardProfile';

import './ProfileCard.css';

const ProfileCard = () => (
  <div className="profile-card--container">
    <ProfileCardAvatar />
    <div className="profile-card--info-container">
      <ProfileCardProfile />
      <ProfileCardContent />
    </div>
  </div>
);

export default ProfileCard;
