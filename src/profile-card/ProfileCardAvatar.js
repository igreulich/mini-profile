import React from 'react';

import avatar from './ewok-avatar-icon.png';

import './ProfileCardAvatar.css';

const ProfileCardAvatar = (props) => {
  const { image } = props;

  return (
    <div className="profile-card--avatar-container">
      <img className="profile-card--avatar-image" src={image} alt="Profile Avatar" />
    </div>
  );
};

ProfileCardAvatar.defaultProps = {
  image: avatar,
};

export default ProfileCardAvatar;
