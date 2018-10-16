import { combineReducers } from 'redux';
import TestReducer from './TestReducer';
import AuthReducer from './AuthReducer';
import BarsReducer from './BarsReducer';
import DogFormReducer from './DogFormReducer';
import DogReducer from './DogReducer';
import MapReducer from './MapReducer';

const rootReducer = combineReducers({
  test: TestReducer,
  auth: AuthReducer,
  dogForm: DogFormReducer,
  dogs: DogReducer,
  map: MapReducer
});

export default rootReducer;
