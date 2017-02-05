import { getJSON } from '../../lib/fetch-json'; // , postJSON, putJSON, deleteJSON

// action type
export const VOTE_UP = 'VOTE_UP';
export const VOTE_DOWN = 'VOTE_DOWN';

export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const SORT_NEWEST_POSTS = 'SORT_NEWEST_POSTS';
export const SORT_POPULAR_POSTS = 'SORT_POPULAR_POSTS';
/* export const FILTER_POSTS = 'FILTER_POSTS'; */

export const LOADING_POSTS_BEGIN = 'LOADING_POSTS_BEGIN';
export const LOADING_POSTS_END = 'LOADING_POSTS_END';
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
  type: SORT_NEWEST_POSTS,
  payload: null,
});

export const postsSortPopular = () => ({
  type: SORT_POPULAR_POSTS,
  payload: null,
});

/* export const filterPosts = category => ({
  type: FILTER_POSTS,
  payload: { category },
});*/

const loadResource = () => ({
  type: LOADING_POSTS_BEGIN,
  payload: null,
});

const doneLoading = () => ({
  type: LOADING_POSTS_END,
  payload: null,
});

const updatePosts = posts => ({
  type: UPDATE_POSTS,
  payload: posts,
});

export const fetchPosts = (id) => {
  return (dispatch, getState) => {
    // Async
    dispatch(loadResource());

    // getJSON('http://localhost:8000/api/posts').then((posts) => {
    getJSON(`http://localhost:8000/api/posts/${id}`).then((posts) => {
      dispatch(updatePosts(posts));
      dispatch(doneLoading());
    });
  };
};

/* const updateVotes = id => ({
  type: UPDATE_VOTES,
  payload: id,
});

export const updatePostVote = (id) => {
  return (dispatch, getState) => {
    // Async
    // dispatch(loadResource());

    // getJSON('http://localhost:8000/api/posts').then((posts) => {
    getJSON(`http://localhost:8000/api/posts/${id}`).then((id) => {
      dispatch(updateVotes(id));
      // dispatch(doneLoading());
    });
  };
}; */
