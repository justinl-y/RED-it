// import mockData from '../../mock-data';
// const categoriesInitialState = mockData.weeks;

import {
  LOADING_CATEGORIES_BEGINS,
  LOADING_CATEGORIES_ENDS,
  UPDATE_CATEGORIES } from './actions';

const categoriesInitialState = {
  loadingResource: false,
  categories: [],
};

export default (state = categoriesInitialState, action) => {
  // console.log(state);
  switch (action.type) {
    case LOADING_CATEGORIES_BEGINS:
      return { ...state, loadingResource: true };
    case LOADING_CATEGORIES_ENDS:
      return { ...state, loadingResource: false };
    case UPDATE_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
