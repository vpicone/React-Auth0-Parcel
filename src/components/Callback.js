import React, { Component } from 'react';
import Auth from '../services/Auth';

const auth = new Auth();

export default class Callback extends Component {
  handleAuthentication = ({ location: { href } }) => {
    if (/access_token|id_token|error/.test(href)) {
      auth.handleAuthentication();
    }
  };
  render() {
    this.handleAuthentication(this.props);
    console.log(this.props);
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
