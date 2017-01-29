import { combineReducers } from 'redux';
import postListPageReducer from '../containers/PostList/reducer';
import categoriesReducer from '../containers/Categories/reducer';

// combined reducer
export default combineReducers({
  appData: combineReducers({
    posts: postListPageReducer,
    categories: categoriesReducer,
  }),
});
