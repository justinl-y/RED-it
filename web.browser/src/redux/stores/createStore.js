/* import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as postsReducer, voteUp, voteDown, sortPopular, sortNewest } from '../posts';

const store = createStore(
    combineReducers({
      posts: postsReducer,
    }),
    composeWithDevTools(),
);

// console.log(postsStore);

store.dispatch(sortPopular());
store.dispatch(voteUp(1));
store.dispatch(voteDown(1));
store.dispatch(voteDown(1));
store.dispatch(voteDown(1));
store.dispatch(sortNewest());
store.dispatch(sortPopular());

export default store;*/
