import {
  LOADING_CATEGORIES_BEGINS,
  LOADING_CATEGORIES_ENDS,
  GET_CATEGORIES_BY_WEEK,
  GET_CATEGORIES_LIST } from './actions';

const categoriesInitialState = {
  loadingResource: false,
  categories: [],
  categoriesList: [],
};

export default (state = categoriesInitialState, action) => {
  switch (action.type) {
    case LOADING_CATEGORIES_BEGINS:
      return { ...state, loadingResource: true };
    case LOADING_CATEGORIES_ENDS:
      return { ...state, loadingResource: false };
    case GET_CATEGORIES_BY_WEEK:
      return { ...state, categories: action.payload };
    case GET_CATEGORIES_LIST:
      return { ...state, categoriesList: action.payload };
    default:
      return state;
  }
};
