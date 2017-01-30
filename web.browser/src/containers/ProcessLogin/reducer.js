import {
  USER_LOGIN,
  USER_SIGN_UP,
  SIGN_UP_LOGIN,
} from './actions';

const processLoginPageInitialState = {
  login: false,
  signup: false,
};

// reducer
export default (state = processLoginPageInitialState, action) => {
  // console.log(state);
  switch (action.type) {
    case USER_LOGIN:
      // console.log('USER_LOGIN');
      return { ...state, login: !state.login };
    case USER_SIGN_UP:
      return { ...state, signup: !state.signup };
    case SIGN_UP_LOGIN:
      // console.log('SIGN_UP_LOGIN');
      return { ...state, login: !state.login };
    default:
      return state;
  }
};
