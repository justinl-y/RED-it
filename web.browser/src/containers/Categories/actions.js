import { getJSON } from '../../lib/fetch-json'; // , postJSON, putJSON, deleteJSON

// action type
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const LOADING_RESOURCE1 = 'LOADING_RESOURCE1';
export const DONE_LOADING1 = 'DONE_LOADING1';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';

// action creator
export const selectCategory = name => ({
  type: SELECT_CATEGORY,
  payload: { name },
});

const loadResource = () => ({
  type: LOADING_RESOURCE1,
  payload: null,
});
const doneLoading = () => ({
  type: DONE_LOADING1,
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
