import React from 'react';
import Card from './Card';
import './hello.scss';
import raccoon from './content/intro.md';

const Hello = () => (
  <div className="entry">
    <Card
      image="raccoon"
      caption="Енот-мудрец, использующий React. Объяснит ситуацию."
      title="Добро пожаловать в мир React, юный енот!"
      content={raccoon}
    />
  </div>
);

export default Hello;
