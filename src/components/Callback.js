import React, { Component } from 'react';
import { handleAuthentication } from '../services/auth';

export default class Callback extends Component {
  authorizeIfAuthenticated = ({ location: { href } }) => {
    if (/access_token|id_token|error/.test(href)) {
      // redirects to / when complete
      handleAuthentication();
    }
  };

  render() {
    this.authorizeIfAuthenticated(this.props);
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
