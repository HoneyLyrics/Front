import client from './client';

export const login = ({ username, password }) =>
  client.post('https://honeylyrics.herokuapp.com/api/auth/login', {
    username,
    password,
  });
// export const login = ({ username, password }) =>
//   client.post('/api/auth/login', { username, password });

export const register = ({ username, password }) =>
  client.post('https://honeylyrics.herokuapp.com/api/auth/register', {
    username,
    password,
  });
// export const register = ({ username, password }) =>
//   client.post('/api/auth/register', { username, password });

export const check = () =>
  client.get('https://honeylyrics.herokuapp.com/api/auth/check');
// export const check = () => client.get('/api/auth/check');

export const logout = () =>
  client.get('https://honeylyrics.herokuapp.com/api/auth/logout');
// export const logout = () => client.get('/api/auth/logout');
