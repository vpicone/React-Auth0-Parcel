import React from 'react';
import { Router } from '@reach/router';

import Auth from './Auth';
import Callback from '../components/Callback';
import Home from '../components/Home';
import App from '../components/App';

export default () => {
  return (
    <Router>
      <App auth={Auth} path="/" />
      <Home auth={Auth} path="/home" />
      <Callback auth={Auth} path="/callback" />
    </Router>
  );
};
