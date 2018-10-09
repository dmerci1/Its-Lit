import { combineReducers } from 'redux';
import TestReducer from './TestReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  test: TestReducer,
  auth: AuthReducer
});

export default rootReducer;
