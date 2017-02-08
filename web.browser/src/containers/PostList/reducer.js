// import expect from 'expect';
import deepFreeze from 'deep-freeze';
import {
    /* VOTE_UP,
    VOTE_DOWN,*/
    SORT_NEWEST_POSTS,
    SORT_POPULAR_POSTS,
    FILTER_POSTS,
    LOADING_POSTS_BEGIN,
    LOADING_POSTS_END,
    UPDATE_POSTS,
    UPDATE_VOTES,
  } from './actions';

const postListPageInitialState = {
  loadingResource: false,
  searchText: '0',
  posts: [],
};

// reducer
export default (state = postListPageInitialState, action) => {
  switch (action.type) {
    /*case VOTE_UP: {
      const editedPosts = state.posts.map((post) => {
        if (Number(post.id) !== Number(action.payload.id)) return post;

        return { ...post, votes: post.votes + 1 };
      });

      return { ...state, posts: editedPosts };
    }
    case VOTE_DOWN: {
      const editedPosts = state.posts.map((post) => {
        if (Number(post.id) !== Number(action.payload.id)) return post;

        return { ...post, votes: post.votes > 0 ? post.votes - 1 : post.votes };
      });

      return { ...state, posts: editedPosts };
    }*/
    case UPDATE_VOTES: {
      console.log(action.payload);
      const editedPosts = state.posts.map((post) => {
        console.log(post.post_id);
        if (post.post_id !== action.payload[0].post_id) return post;
        console.log('fired');

        return { ...post, votes: action.payload[0].votes };
      });

      return { ...state, posts: editedPosts };
    }
    case SORT_POPULAR_POSTS:
      const sortPopular = state.posts.slice().sort((a, b) => (
        Number(b.votes) - Number(a.votes)
      ));

      return { ...state, posts: sortPopular };
    case SORT_NEWEST_POSTS:
      const sortNewest = state.posts.slice().sort((a, b) => (
        Number(a.post_id) - Number(b.post_id)
      ));

      return { ...state, posts: sortNewest };
    case FILTER_POSTS:
      return { ...state, searchText: action.payload.category };
    case LOADING_POSTS_BEGIN:
      return { ...state, loadingResource: true };
    case LOADING_POSTS_END:
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
