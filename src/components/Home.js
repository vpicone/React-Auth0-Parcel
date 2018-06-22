import React, { Component } from 'react';
import { logout, getUserData } from '../services/auth';
import { UserContext } from '../services/context';

export default class Home extends Component {
  printUser = user => {
    return <pre>{JSON.stringify(user, null, 2)}</pre>;
  };

  render() {
    const user = getUserData();
    return (
      <UserContext.Provider value={user}>
        <h2>Hello {user.given_name}!</h2>
        <img src={user.picture} style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
        {this.printUser(user)}
        <br />
        <button onClick={() => logout()}>Log out</button>
      </UserContext.Provider>
    );
  }
}
