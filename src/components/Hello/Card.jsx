import React, { PropTypes } from 'react';
import Avatar from '../Avatar/Avatar';

const Card = ({ image, caption, title, content }) => (
  <div className="hello-card">
    <div className="hello-card__image">
      <Avatar image={image} className="hello-card__avatar" />
      <div className="hello-card__caption">{caption}</div>
    </div>
    <div className="hello-card__message">
      <h1 className="hello-card__title">{title}</h1>
      <div className="hello-card__description" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
