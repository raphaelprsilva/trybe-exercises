import { LOGIN_USER } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

export const loginUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
