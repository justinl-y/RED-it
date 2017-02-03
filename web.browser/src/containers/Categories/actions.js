import { getJSON } from '../../lib/fetch-json'; // , postJSON, putJSON, deleteJSON

// action type
export const LOADING_CATEGORIES_BEGINS = 'LOADING_CATEGORIES_BEGINS';
export const LOADING_CATEGORIES_ENDS = 'LOADING_CATEGORIES_ENDS';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
export const UPDATE_CATEGORIES_LIST = 'UPDATE_CATEGORIES_LIST';

// action creator
const loadResource = () => ({
  type: LOADING_CATEGORIES_BEGINS,
  payload: null,
});
const doneLoading = () => ({
  type: LOADING_CATEGORIES_ENDS,
  payload: null,
});
const updateCategories = categories => ({
  type: UPDATE_CATEGORIES,
  payload: categories,
});
const updateCategoriesList = categories => ({
  type: UPDATE_CATEGORIES_LIST,
  payload: categories,
});

export const fetchCategories = () => {
  return (dispatch, getState) => {
    // Async
    dispatch(loadResource());

    // getJSON('http://localhost:8000/categories').then((category) => {
    getJSON('http://localhost:8000/api/weeks').then((category) => {
      dispatch(updateCategories(category));
      dispatch(doneLoading());
    });
  };
};

export const fetchCategoriesList = () => {
  return (dispatch, getState) => {
    // Async
    dispatch(loadResource());

    getJSON('http://localhost:8000/categories-list').then((category) => {
      dispatch(updateCategoriesList(category));
      dispatch(doneLoading());
    });
  };
};
