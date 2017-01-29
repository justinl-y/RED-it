import { getJSON } from '../../lib/fetch-json'; // , postJSON, putJSON, deleteJSON

// action type
export const LOADING_CATEGORIES_BEGINS = 'LOADING_CATEGORIES_BEGINS';
export const LOADING_CATEGORIES_ENDS = 'LOADING_CATEGORIES_ENDS';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';

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

export const fetchCategories = () => {
  return (dispatch, getState) => {
    // Async
    dispatch(loadResource());

    getJSON('http://localhost:8000/categories').then((category) => {
      dispatch(updateCategories(category));
      dispatch(doneLoading());
    });
  };
};
