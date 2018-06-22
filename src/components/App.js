import React, { Component } from 'react';
import { isAuthenticated } from '../services/auth';
import Home from './Home';
import LandingPage from './LandingPage';

export default class App extends Component {
  render() {
    return isAuthenticated() ? <Home /> : <LandingPage />;
  }
}
