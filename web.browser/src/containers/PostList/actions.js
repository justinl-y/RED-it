const postListPageInitialState = { postsPage: undefined };

// action type
// const GO_TO_PROFILE = 'GO_TO_PROFILE';

const VOTE_UP = 'VOTE_UP';
const VOTE_DOWN = 'VOTE_DOWN';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';
const POSTS_SORT_NEWEST = 'POSTS_SORT_NEWEST';
const POSTS_SORT_POPULAR = 'POSTS_SORT_POPULAR';

// action creator
/* export const goToProfile = student => ({
  type: GO_TO_PROFILE,
  payload: student,
});*/

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

// reducer
export default (state = postListPageInitialState, action) => {
  // console.log(state);
  switch (action.type) {
    /* case GO_TO_PROFILE:
      return { ...state, viewingProfile: action.payload };*/
    case VOTE_UP:
      // console.log(posts);
      // console.log(action);
      // console.log(action.payload);

      /* return state.map((post) => {
        if (Number(post.id) !== action.payload.id) return post;

        return { ...post, votes: post.votes + 1 };
      });*/
      console.log(`vote up - ${action.payload.id}`);

      return state;
    case VOTE_DOWN:
      return state.map((post) => {
        if (Number(post.id) !== action.payload.id) return post;

        return { ...post, votes: post.votes > 0 ? post.votes - 1 : post.votes };
      });
    case POSTS_SORT_POPULAR:
      /* return state.slice().sort((a, b) => (
          Number(b.votes) - Number(a.votes)
          ),
      );*/
      console.log('sort popular');

      return state;
    case POSTS_SORT_NEWEST:
      /* return state.slice().sort((a, b) => (
        Number(a.id) - Number(b.id)
        ),
      ); */

      console.log('sort newest');

      return state;
    default:
      return state;
  }
};


/* export const reducer = (posts = data.data.posts, action) => {
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
};*/
