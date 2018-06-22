import React, { Component } from 'react';
import Auth from '../services/Auth';

const auth = new Auth();

export default class App extends Component {
  goTo = route => {
    this.props.history.replace(`/${route}`);
  };

  login = () => {
    auth.login();
  };

  logout = () => {
    auth.logout();
  };

  isAuthenticated = () => {
    return auth.isAuthenticated();
  };

  render() {
    return (
      <div>
        Hello
        <nav>
          {auth.isAuthenticated() ? (
            <button onClick={this.logout}>Log out</button>
          ) : (
            <button onClick={this.login}>Log in</button>
          )}
        </nav>
      </div>
    );
  }
}
