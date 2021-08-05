export const LOGIN_USER = 'LOGIN_USER';
export const ADD_CLIENT = 'ADD_CLIENT';

export const loginUserCreator = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const registerClient = (value) => ({
  type: ADD_CLIENT,
  payload: value,
});
