import firebase from 'firebase';
import {
  BAR_UPDATE,
  BAR_CREATE,
} from './types';

export const barUpdate = ({ prop, value }) => {
  return {
    type: BAR_UPDATE,
    payload: { prop, value }
  };
};

export const barCreate = ({ name  }) => {
    const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/bars`)
    .push({ name })
    .then(() => {
      dispatch({ type: BAR_CREATE });
  });
  };
};
