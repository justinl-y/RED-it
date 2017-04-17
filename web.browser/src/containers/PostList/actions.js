import { getJSON, postJSON } from '../../lib/fetch-json'; // , putJSON, deleteJSON

// action type
export const UPDATE_VOTES = 'UPDATE_VOTES';

export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const SORT_NEWEST_POSTS = 'SORT_NEWEST_POSTS';
export const SORT_POPULAR_POSTS = 'SORT_POPULAR_POSTS';

export const LOADING_POSTS_BEGIN = 'LOADING_POSTS_BEGIN';
export const LOADING_POSTS_END = 'LOADING_POSTS_END';
export const UPDATE_POSTS = 'UPDATE_POSTS';

// action creator
const updateVotes = postVote => ({
  type: UPDATE_VOTES,
  payload: postVote,
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
  return (dispatch) => {
    // Async
    dispatch(loadResource());

    // getJSON('http://localhost:8000/api/posts').then((posts) => {
    getJSON(`http://localhost:8000/api/posts/${id}`)
      .then((posts) => {
        dispatch(updatePosts(posts));
        dispatch(doneLoading());
      });
  };
};

export const updatePostVote = (vote) => {
  const voteString = JSON.stringify(vote);

  return (dispatch) => {
    // dispatch(loadResource());
    postJSON('http://localhost:8000/api/votes', voteString)
      .then((response) => {
        dispatch(updateVotes(response));
        // dispatch(doneLoading());
      });
  };
};
