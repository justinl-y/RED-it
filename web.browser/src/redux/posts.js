import * as data from '../mock-data';

// import expect from 'expect';
// import deepFreeze from 'deep-freeze';

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
  payload: {},
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: { id },
});

export const updatePost = id => ({
  type: UPDATE_POST,
  payload: { id },
});

export const sortNewest = posts => ({
  type: SORT_NEWEST,
  payload: { posts },
});

export const sortPopular = () => ({
  type: SORT_POPULAR,
  payload: { },
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
      return posts.sort((a, b) => (
          Number(b.votes) - Number(a.votes)
          ),
      );

      /* const popularPosts = posts.sort((a, b) => {
        return (Number(b.votes) - Number(a.votes));
      });

      //console.log(popularPosts);

      return popularPosts;*/
    case SORT_NEWEST:
      return posts.sort((a, b) => (
        Number(a.id) - Number(b.id)
        ),
      );
    default:
      return posts;
  }
};

// deepFreeze(initialState);

// const updated = reducer(initialState, voteUp(2));
// expect(updated.pokemonList[1].votes).toEqual(3);



