import { postJSON, putJSON, deleteJSON } from '../../lib/fetch-json';

// action type
export const POST_EDIT_TRUE = 'POST_EDIT_TRUE';
export const POST_EDIT_FALSE = 'POST_EDIT_FALSE';

// action creator
export const postAdded = result => ({
  type: POST_EDIT_FALSE,
  payload: result,
});

export const postEdited = result => ({
  type: POST_EDIT_TRUE,
  payload: result,
});

export const postDeleted = id => ({
  type: POST_EDIT_FALSE,
  payload: id,
});

// thunks
export const insertPost = (post) => {
  const postString = JSON.stringify(post);

  return (dispatch) => {
    postJSON('http://localhost:8000/api/post', postString)
      .then((result) => {
        dispatch(postAdded(result));
      });
  };
};

export const editPost = (post) => {
  const postString = JSON.stringify(post);

  return (dispatch) => {
    putJSON('http://localhost:8000/auth/post', postString)
      .then((result) => {
        dispatch(postEdited(result));
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    deleteJSON('http://localhost:8000/auth/post', id)
      .then((result) => {
        dispatch(postDeleted(result));
      });
  };
};
