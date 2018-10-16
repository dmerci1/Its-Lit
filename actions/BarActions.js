import firebase from 'firebase';
import {
  BAR_UPDATE,
  BAR_CREATE,
  GET_LOCAL_BARS,
  CREATE_BAR_LIST
} from './types';


export const barUpdate = ({ prop, value }) => {
  return {
    type: BAR_UPDATE,
    payload: { prop, value }
  };
};

export const barCreate = ({ bars }) => {
    const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/bars`)
    .set({ bars })
    .then(() => {
      dispatch({ type: BAR_CREATE });
  });
  };
};
