import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import './active-user.scss';

function UserStat({ title, value }) {
  return (
    <div className="active-user__stat">
      <div className="active-user__title">{title}</div>
      <div className="active-user__value">{value}</div>
    </div>
  );
}

UserStat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default function ActiveUser({ data }) {
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
}

ActiveUser.propTypes = {
  data: PropTypes.object,
};
