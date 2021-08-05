import { ADD_CLIENT } from '../actions';

const INITIAL_STATE = [];

export const register = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return [...state, action.payload];
    default:
      return state;
  }
};