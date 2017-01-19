// import expect from 'expect';
import deepFreeze from 'deep-freeze';
import * as data from '../mock-data';

// action type
const VOTE_UP = 'VOTE_UP';
const VOTE_DOWN = 'VOTE_DOWN';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';
const SORT_NEWEST = 'SORT_NEWEST';
const SORT_POPULAR = 'SORT_POPULAR';

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

export const sortNewest = () => ({
  type: SORT_NEWEST,
});

export const sortPopular = () => ({
  type: SORT_POPULAR,
});

// reducer
export const reducer = (posts = data.data.posts, action) => {
  switch (action.type) {
    case VOTE_UP:
      // console.log(posts);
      // console.log(action);
      // console.log(action.payload);

      return posts.map((post) => {
        if (Number(post.id) !== action.payload.id) return post;

        return { ...post, votes: post.votes + 1 };
      });
    case VOTE_DOWN:
      return posts.map((post) => {
        if (Number(post.id) !== action.payload.id) return post;

        return { ...post, votes: post.votes > 0 ? post.votes - 1 : post.votes };
      });
    case SORT_POPULAR:
      return posts.slice(0, posts.length).sort((a, b) => (
          Number(b.votes) - Number(a.votes)
          ),
      );
    case SORT_NEWEST:
      return posts.slice(0, posts.length).sort((a, b) => (
        Number(a.id) - Number(b.id)
        ),
      );
    default:
      return posts;
  }
};

deepFreeze(data.data.posts);

// const updated = reducer(data.data.posts, voteUp(1));
// console.log(updated);
// expect(updated[1].votes).toEqual(6);
