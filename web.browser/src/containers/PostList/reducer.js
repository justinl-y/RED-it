// import expect from 'expect';
import deepFreeze from 'deep-freeze';
import {
    VOTE_UP,
    VOTE_DOWN,
    POSTS_SORT_POPULAR,
    POSTS_SORT_NEWEST,
    FILTER_POSTS,
    LOADING_RESOURCE,
    DONE_LOADING,
    UPDATE_POSTS } from './actions';

const postListPageInitialState = {
  loadingResource: false,
  posts: [],
};

// reducer
export default (state = postListPageInitialState, action) => {
  // console.log(action);
  switch (action.type) {
    case VOTE_UP: {
      const editedPosts = state.posts.map((post) => {
        if (Number(post.id) !== Number(action.payload.id)) return post;

        return { ...post, votes: post.votes + 1 };
      });

      return { ...state, posts: editedPosts };
    }
    case VOTE_DOWN:
      /* return state.map((post) => {
        if (Number(post.id) !== action.payload.id) return post;

        return { ...post, votes: post.votes > 0 ? post.votes - 1 : post.votes };
      });*/

      const editedPosts = state.posts.map((post) => {
        if (Number(post.id) !== Number(action.payload.id)) return post;

        return { ...post, votes: post.votes > 0 ? post.votes - 1 : post.votes };
      });

      return { ...state, posts: editedPosts };
    case POSTS_SORT_POPULAR:
      const sortPopular = state.posts.slice().sort((a, b) => (
        Number(b.votes) - Number(a.votes)
      ));

      return { ...state, posts: sortPopular };
    case POSTS_SORT_NEWEST:
      const sortNewest = state.posts.slice().sort((a, b) => (
        Number(a.id) - Number(b.id)
      ));

      return { ...state, posts: sortNewest };
    case FILTER_POSTS:
      const filteredPosts = state.posts.filter(post =>
        post.categories.some(c =>
          c === action.payload.category),
      );

      return { ...state, posts: filteredPosts };
    case LOADING_RESOURCE:
      return { ...state, loadingResource: true };
    case DONE_LOADING:
      return { ...state, loadingResource: false };
    case UPDATE_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

deepFreeze(postListPageInitialState);

// const updated = reducer(postListPageInitialState, voteUp(1));
// console.log(updated);
// expect(updated[1].votes).toEqual(6); */
