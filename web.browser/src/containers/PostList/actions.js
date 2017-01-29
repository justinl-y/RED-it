import { getJSON } from '../../lib/fetch-json'; // , postJSON, putJSON, deleteJSON

// action type
export const VOTE_UP = 'VOTE_UP';
export const VOTE_DOWN = 'VOTE_DOWN';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const POSTS_SORT_NEWEST = 'POSTS_SORT_NEWEST';
export const POSTS_SORT_POPULAR = 'POSTS_SORT_POPULAR';
export const FILTER_POSTS = 'FILTER_POSTS';

export const LOADING_RESOURCE = 'LOADING_RESOURCE';
export const DONE_LOADING = 'DONE_LOADING';
export const UPDATE_POSTS = 'UPDATE_POSTS';

// action creator
export const voteUp = id => ({
  type: VOTE_UP,
  payload: { id },
});

export const voteDown = id => ({
  type: VOTE_DOWN,
  payload: { id },
});

export const addPost = ({
  type: ADD_POST,
  payload: null,
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: { id },
});

export const updatePost = id => ({
  type: UPDATE_POST,
  payload: { id },
});

export const postsSortNewest = () => ({
  type: POSTS_SORT_NEWEST,
  payload: null,
});

export const postsSortPopular = () => ({
  type: POSTS_SORT_POPULAR,
  payload: null,
});

export const filterPosts = category => ({
  type: FILTER_POSTS,
  payload: { category },
});


const loadResource = () => ({
  type: LOADING_RESOURCE,
  payload: null,
});
const doneLoading = () => ({
  type: DONE_LOADING,
  payload: null,
});
const updatePosts = posts => ({
  type: UPDATE_POSTS,
  payload: posts,
});

export const fetchPosts = () => {
  return (dispatch, getState) => {
    // Async
    dispatch(loadResource());

    getJSON('http://localhost:8000/posts').then((posts) => {
      dispatch(updatePosts(posts));
      dispatch(doneLoading());
    });
  };
};
