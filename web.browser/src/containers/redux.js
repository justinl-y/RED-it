import { combineReducers } from 'redux';
import postListPageReducer from '../containers/PostList/actions';
import mockData from '../mock-data';

const appInitialState = mockData;
// const appInitialState = mockData.posts;

const appData = (state = appInitialState, action) => {
  // console.log(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  postsPage: postListPageReducer,
  appData,
});
