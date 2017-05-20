import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as avatars from './images';

const Avatar = ({ image, className }) => (
  <img
    className={cx('avatar', className)}
    src={avatars[image]}
    alt={image}
  />
);

Avatar.propTypes = {
  image: PropTypes.oneOf(Object.keys(avatars)).isRequired,
  className: PropTypes.string,
};

export default Avatar;
