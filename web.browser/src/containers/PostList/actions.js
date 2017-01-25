// import expect from 'expect';
import deepFreeze from 'deep-freeze';

// const postListPageInitialState = { postsPage: undefined };
// const postListPageInitialState = { };

import mockData from '../../mock-data'; // should be slice from main reducer?

const postListPageInitialState = mockData.posts;

// action type
const VOTE_UP = 'VOTE_UP';
const VOTE_DOWN = 'VOTE_DOWN';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';
const POSTS_SORT_NEWEST = 'POSTS_SORT_NEWEST';
const POSTS_SORT_POPULAR = 'POSTS_SORT_POPULAR';
const FILTER_POSTS = 'FILTER_POSTS';

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
  payload: { },
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
});

export const postsSortPopular = () => ({
  type: POSTS_SORT_POPULAR,
});

export const filterPosts = category => ({
  type: FILTER_POSTS,
  payload: { category },
});

// reducer
export default (state = postListPageInitialState, action) => {
  // console.log(state);
  switch (action.type) {
    case VOTE_UP:
      return state.map((post) => {
        if (Number(post.id) !== Number(action.payload.id)) return post;

        return { ...post, votes: post.votes + 1 };
      });
    case VOTE_DOWN:
      return state.map((post) => {
        if (Number(post.id) !== action.payload.id) return post;

        return { ...post, votes: post.votes > 0 ? post.votes - 1 : post.votes };
      });
    case POSTS_SORT_POPULAR:
      return state.slice().sort((a, b) => (
          Number(b.votes) - Number(a.votes)
          ),
      );
    case POSTS_SORT_NEWEST:
      return state.slice().sort((a, b) => (
        Number(a.id) - Number(b.id)
        ),
      );
    case FILTER_POSTS:
      return state.filter(post =>
        post.categories.some(c =>
          c === action.payload.category),
      );

      // return state;
    default:
      return state;
  }
};

/* case ADD_STUDENT_LEVEL: {
  // console.log(state);
  const newStudent = { ...action.payload };

  if (newStudent.level === undefined) {
    // console.log('fired0');
    newStudent.level = 0;
  } else {
    // console.log('fired1');
    newStudent.level += 1;
  }

  console.log({ ...state, viewingProfile: newStudent });

  return { ...state, viewingProfile: newStudent };
}*/

deepFreeze(postListPageInitialState);

// const updated = reducer(postListPageInitialState, voteUp(1));
// console.log(updated);
// expect(updated[1].votes).toEqual(6); */
