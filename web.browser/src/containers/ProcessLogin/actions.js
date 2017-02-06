import { getJSON, postJSON } from '../../lib/fetch-json';

// action type
export const USER_LOGIN = 'USER_LOGIN';
export const USER_SIGN_UP = 'USER_SIGN_UP';
export const SIGN_UP_LOGIN = 'SIGN_UP_LOGIN';
export const UPDATE_LOGIN = 'UPDATE_LOGIN';

// action creator
export const userLogin = () => ({
  type: USER_LOGIN,
  payload: null,
});

export const userSignUp = () => ({
  type: USER_SIGN_UP,
  payload: null,
});

export const userSignUpLogin = () => ({
  type: SIGN_UP_LOGIN,
  payload: null,
});

const updateLogin = result => ({
  type: UPDATE_LOGIN,
  payload: result,
});

export const verifyLogin = (login) => {
  const loginString = JSON.stringify(login);

  return (dispatch) => {
    // dispatch(loadResource());
    postJSON('http://localhost:8000/auth/login', loginString).then((result) => {
      dispatch(updateLogin(result));
      // dispatch(doneLoading());
    });
  };
};

export const userLogout = () => {
  console.log('logging-out');
  return (dispatch) => {
    // dispatch(loadResource());
    getJSON('http://localhost:8000/auth/logout').then((result) => {
      console.log(result);
      dispatch(updateLogin(result));
      // dispatch(doneLoading());
    });
  };
};
