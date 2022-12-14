import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyle } from './styles/global';

import 'rc-slider/assets/index.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
