import {
  GET_LOCAL_BARS
} from '../actions/types';

const INITIAL_STATE = {
  Bars: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LOCAL_BARS:
      return action.payload;
    default:
      return state;
  }
}
