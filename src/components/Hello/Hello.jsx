import React from 'react';
import './hello.scss';

const GH_LINK = 'https://github.com/rtivital/react-challenge-sort-and-search';

const Hello = () => (
  <div className="hello">
    <h1 className="hello__title">Добро пожаловать в мир React</h1>
    <p>
      Ты запустил стартовый шаблон, а значит, половина дела уже сделана!
      Не забудь поставить проекту звезду на <a href={GH_LINK}>Github</a>.
      <strike> Ура, вот и вторая половина сделана, ты молодец!).</strike>
    </p>
  </div>
);

export default Hello;
