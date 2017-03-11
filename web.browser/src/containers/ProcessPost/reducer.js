import {
  POST_ADDED,
  POST_EDITED,
} from './actions';

const processProcessPostPageInitialState = {
  editPost: false,
};

// reducer
export default (state = processProcessPostPageInitialState, action) => {
  switch (action.type) {
    case POST_ADDED:
      return { ...state, editPost: false };
    case POST_EDITED:
      return { ...state, editPost: true };
    default:
      return state;
  }
};
