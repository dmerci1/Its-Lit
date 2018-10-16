import {
  BAR_UPDATE,
  BAR_CREATE,
  BAR_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BAR_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case BAR_CREATE:
      return INITIAL_STATE;
    case BAR_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
