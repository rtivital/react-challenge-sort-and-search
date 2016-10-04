import React from 'react';
import Card from './Card';
import './hello.scss';
import content from './content';

const Hello = () => {
  const data = content.map(
    (part, index) => <Card {...part} key={`${index}-${part.image}`} />
  );

  return <div className="entry">{data}</div>;
};

export default Hello;
