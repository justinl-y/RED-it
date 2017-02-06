import {
  USER_SIGN_UP,
  SIGN_UP_LOGIN,
  UPDATE_LOGIN,
} from './actions';

const processLoginPageInitialState = {
  login: false,
  signup: false,
};

// reducer
export default (state = processLoginPageInitialState, action) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return { ...state, signup: !state.signup };
    case SIGN_UP_LOGIN: {
      let login = false;

      if (action.payload.response) {
        login = true;
      }

      return { ...state, login, signup: false };
    }
    case UPDATE_LOGIN: {
      let login = false;

      if (action.payload.response) {
        login = true;
      }

      return { ...state, login };
    }
    default:
      return state;
  }
};
