// action type
export const USER_LOGIN = 'USER_LOGIN';
export const USER_SIGN_UP = 'USER_SIGN_UP';
export const SIGN_UP_LOGIN = 'SIGN_UP_LOGIN';

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
