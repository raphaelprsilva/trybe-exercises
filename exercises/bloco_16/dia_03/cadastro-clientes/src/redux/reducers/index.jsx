import { combineReducers } from 'redux';
import { loginUser } from './loginUser';
import { register } from './register';

const rootReducer = combineReducers({ loginUser, register });

export default rootReducer;
