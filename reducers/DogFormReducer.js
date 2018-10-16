import {
  BAR_UPDATE,
  BAR_CREATE,

} from '../actions/types';

const INITIAL_STATE = {
  name: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BAR_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case BAR_CREATE:
      return { ...state, INITIAL_STATE };
    default:
      return state;
  }
};
