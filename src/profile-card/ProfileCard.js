import React from 'react';

import ProfileCardAvatar from './ProfileCardAvatar';
import ProfileCardContent from './ProfileCardContent';
import ProfileCardProfile from './ProfileCardProfile';

import './ProfileCard.css';

const ProfileCard = (props) => {
  const {content, image, name, title} = props;

  return (
    <div className="profile-card--container">
      <ProfileCardAvatar image={image} />
      <div className="profile-card--info-container">
        <ProfileCardProfile name={name} title={title} />
        <ProfileCardContent content={content} />
      </div>
    </div>
  );
};

export default ProfileCard;
