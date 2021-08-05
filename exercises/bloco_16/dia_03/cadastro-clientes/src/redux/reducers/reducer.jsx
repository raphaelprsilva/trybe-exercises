import { LOGIN_USER } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.state) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
