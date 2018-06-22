import React from 'react';
import { Router } from '@reach/router';

import * as Auth from './auth';

import Callback from '../components/Callback';
import App from '../components/App';

export default () => {
  return (
    <Router>
      <App auth={Auth} path="/" />
      <Callback auth={Auth} path="/callback" />
    </Router>
  );
};
