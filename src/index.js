import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery';
import 'popper.js';
import 'bootstrap';
import { AppRouter } from './AppRouter';
import "./styles/styles.scss"


ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

