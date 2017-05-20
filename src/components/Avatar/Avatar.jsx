import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as avatars from './images';

export default function Avatar({ image, className }) {
  return (
    <img
      className={cx('avatar', className)}
      src={avatars[image]}
      alt={image}
    />
  );
}

Avatar.propTypes = {
  image: PropTypes.oneOf(Object.keys(avatars)).isRequired,
  className: PropTypes.string,
};
