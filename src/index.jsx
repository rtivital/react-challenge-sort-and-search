import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App/App';
import './styles/index.scss';

const rootElement = document.getElementById('app');
render(
  <AppContainer><App /></AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    render(
      React.createElement(require('./components/App/App').default),
      rootElement
    );
  });
}
