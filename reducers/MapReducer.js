import {
  GET_LOCATION
} from '../actions/types';

const INITIAL_STATE = {
  region: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
