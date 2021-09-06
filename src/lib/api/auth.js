import client from './client';

let loginURL, registerURL, checkURL, logoutURL;

if (process.env.NODE_ENV !== 'production') {
  loginURL = '/api/auth/login';
  registerURL = '/api/auth/register';
  checkURL = '/api/auth/check';
  logoutURL = '/api/auth/logout';
} else {
  loginURL = 'https://honeylyrics.herokuapp.com/api/auth/login';
  registerURL = 'https://honeylyrics.herokuapp.com/api/auth/register';
  checkURL = 'https://honeylyrics.herokuapp.com/api/auth/check';
  logoutURL = 'https://honeylyrics.herokuapp.com/api/auth/logout';
}

export const login = ({ username, password }) =>
  client.post(loginURL, { username, password });

export const register = ({ username, password }) =>
  client.post(registerURL, { username, password });

export const check = () => client.get(checkURL);

export const logout = () => client.get(logoutURL);
