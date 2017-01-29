// action type
export const USER_LOGIN = 'USER_LOGIN';
export const USER_SIGN_UP = 'USER_SIGN_UP';

// action creator
export const userLogin = () => ({
  type: USER_LOGIN,
  payload: null,
});

export const userSignUp = () => ({
  type: USER_SIGN_UP,
  payload: null,
});
