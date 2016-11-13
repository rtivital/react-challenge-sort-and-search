import React from 'react';
import content from './hello.md';
import './hello.scss';

const Hello = () => (
  <div className="hello-wrapper">
    <div className="hello" dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

export default Hello;
