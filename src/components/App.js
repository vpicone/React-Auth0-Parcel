import React, { Component } from 'react';
import { isAuthenticated } from '../services/auth';
import Home from './Home';

export default class App extends Component {
  goTo = route => {
    this.props.history.replace(`/${route}`);
  };

  render() {
    return (
      <div>
        Hello
        <nav>{isAuthenticated() ? <Home /> : <button onClick={this.login}>Log in</button>}</nav>
      </div>
    );
  }
}
