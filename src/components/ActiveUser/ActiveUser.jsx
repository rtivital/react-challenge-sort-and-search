import React, { PropTypes } from 'react';
import Avatar from '../Avatar/Avatar';
import './active-user.scss';

const UserStat = ({ title, value }) => (
  <div className="active-user__stat">
    <div className="active-user__title">{title}</div>
    <div className="active-user__value">{value}</div>
  </div>
);

UserStat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const ActiveUser = ({ data }) => {
  if (!data) {
    return <ActiveUserPlaceHolder />;
  }

  const { avatar, name, age, phone } = data;

  return (
    <div className="active-user">
      <Avatar image={avatar} className="active-user__avatar" />
      <div className="active-user__stats">
        <UserStat title="name" value={name} />
        <UserStat title="age" value={age} />
        <UserStat title="phone" value={phone} />
      </div>
    </div>
  );
};

ActiveUser.propTypes = {
  data: PropTypes.object,
};

export default ActiveUser;
