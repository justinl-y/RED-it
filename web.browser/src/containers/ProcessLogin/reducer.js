import {
  USER_LOGIN,
  USER_SIGN_UP,
} from './actions';

const processLoginPageInitialState = {
  login: false,
  signup: false,
};

// reducer
export default (state = processLoginPageInitialState, action) => {
  // console.log(action);
  switch (action.type) {
    case USER_LOGIN:
      console.log('USER_LOGIN');
      return state;
    case USER_SIGN_UP:
      console.log('USER_SIGN_UP');
      return state;
    default:
      return state;
  }
};
