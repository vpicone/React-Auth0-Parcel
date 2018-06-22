import { WebAuth } from 'auth0-js';
import { navigate } from '@reach/router';
import jwt_decode from 'jwt-decode';

const auth0 = new WebAuth({
  domain: 'vpicone.auth0.com',
  clientID: 'pD9G45nP8OffGXptNj96WCZILDzTsgWP',
  redirectUri: 'http://localhost:3000/callback',
  audience: 'https://vpicone.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid profile',
});

const setSession = authResult => {
  // Set the time that the Access Token will expire at
  let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
};

export const handleAuthentication = () => {
  auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      setSession(authResult);
    } else if (err) {
      console.log(err);
    }
    navigate('/');
  });
};

export const login = () => {
  auth0.authorize();
};

export const logout = () => {
  // Clear Access Token and ID Token from local storage
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
  // navigate to the home route
  navigate('/');
};

export const isAuthenticated = () => {
  // Check whether the current time is past the
  // Access Token's expiry time
  let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
};

export const getUserData = () => {
  const idToken = localStorage.getItem('id_token');
  return idToken ? jwt_decode(idToken) : null;
};
