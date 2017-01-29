// import mockData from '../../mock-data';
// const categoriesInitialState = mockData.weeks;

import {
  SELECT_CATEGORY,
  LOADING_RESOURCE1,
  DONE_LOADING1,
  UPDATE_CATEGORIES } from './actions';

const categoriesInitialState = {
  loadingResource: false,
  categories: [],
};

export default (state = categoriesInitialState, action) => {
  // console.log(state);
  switch (action.type) {
    case SELECT_CATEGORY:
      // console.log(action.payload.name);
      // console.log(`Category Name: ${action.payload.name}`);
      return state;
    case LOADING_RESOURCE1:
      return { ...state, loadingResource: true };
    case DONE_LOADING1:
      return { ...state, loadingResource: false };
    case UPDATE_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
