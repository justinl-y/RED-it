import { postJSON } from '../../lib/fetch-json';

// action type
export const POST_ADDED = 'POST_ADDED';
export const POST_EDITED = 'POST_EDITED';

// action creator
export const postAdded = result => ({
  type: POST_ADDED,
  payload: result,
});

export const postEdited = result => ({
  type: POST_EDITED,
  payload: result,
});

/* export const userVerifyLogin = (login) => {
  const loginString = JSON.stringify(login);

  return (dispatch) => {
    // dispatch(loadResource());
    postJSON('http://localhost:8000/auth/login', loginString).then((result) => {
      dispatch(updateLogin(result));
      // dispatch(doneLoading());
    });
  };
};*/

export const insertPost = (post) => {
  const postString = JSON.stringify(post);

  // console.log(postString);

  return (dispatch) => {
    // dispatch(loadResource());
    postJSON('http://localhost:8000/api/post', postString).then((result) => {
      dispatch(postAdded(result));
      // dispatch(doneLoading());
    });
  };
};

/* export const editPost = (register) => {
  const loginString = JSON.stringify(register);

  return (dispatch) => {
    // dispatch(loadResource());
    postJSON('http://localhost:8000/auth/register', loginString).then((result) => {
      dispatch(userSignUpLogin(result));
      // dispatch(doneLoading());
    });
  };
}; */
