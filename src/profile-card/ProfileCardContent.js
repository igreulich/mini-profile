import React from 'react';

import './ProfileCardContent.css';

const ProfileCardContent = (props) => {
  const { content, title } = props;

  return (
    <div className="profile-card--info-content">
      <p className="profile-card--content-title">{title}</p>
      <div className="profile-card--content">{content}</div>
    </div>
  );
};

ProfileCardContent.defaultProps = {
  content: 'Height: 0.8m',
  title: 'Stats',
};

export default ProfileCardContent;
