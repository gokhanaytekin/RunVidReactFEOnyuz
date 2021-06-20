import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//CSS Imports
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/intlTelInput.css';
import './assets/css/niceCountryInput.css';
import './assets/css/protip.min.css';
import './assets/css/simditor.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)