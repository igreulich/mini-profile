import React from 'react';

import './ProfileCardProfile.css';

const ProfileCardProfile = (props) => {
  const { name, title } = props;

  return (
    <div className="profile-card--info-profile">
      <p className="profile-card--fullname">{name}</p>
      <p className="profile-card--title">{title}</p>
    </div>
  );
};

ProfileCardProfile.defaultProps = {
  name: 'Wicket Wystri Warrick',
  title: 'Little furball',
};

export default ProfileCardProfile;
