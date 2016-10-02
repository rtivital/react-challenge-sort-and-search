import React, { PropTypes } from 'react';
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
