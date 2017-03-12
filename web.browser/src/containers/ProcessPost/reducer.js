import {
  POST_EDIT_FALSE,
  POST_EDIT_TRUE,
} from './actions';

const processProcessPostPageInitialState = {
  editPost: false,
  title: 'Add Post',
};

// reducer
export default (state = processProcessPostPageInitialState, action) => {
  switch (action.type) {
    case POST_EDIT_FALSE:
      return { ...state, editPost: false, title: 'Add Post' };
    case POST_EDIT_TRUE:
      return { ...state, editPost: true, title: 'Edit Post' };
    default:
      return state;
  }
};
