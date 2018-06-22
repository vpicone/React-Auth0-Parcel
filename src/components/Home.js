import React, { Component } from 'react';
import { logout, getUserData } from '../services/auth';
import { UserContext } from '../services/context';

export default class Home extends Component {
  render() {
    const user = getUserData();
    console.log(user);
    return (
      <UserContext.Provider value={user}>
        Home Page!<button onClick={() => logout()}>Log out</button>
      </UserContext.Provider>
    );
  }
}
