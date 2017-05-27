import { getJSON } from '../../lib/fetch-json';

// action type
export const LOADING_CATEGORIES_BEGINS = 'LOADING_CATEGORIES_BEGINS';
export const LOADING_CATEGORIES_ENDS = 'LOADING_CATEGORIES_ENDS';
export const GET_CATEGORIES_BY_WEEK = 'GET_CATEGORIES_BY_WEEK';
export const GET_CATEGORIES_LIST = 'GET_CATEGORIES_LIST';

// action creator
const loadResource = () => ({
  type: LOADING_CATEGORIES_BEGINS,
  payload: null,
});

const doneLoading = () => ({
  type: LOADING_CATEGORIES_ENDS,
  payload: null,
});

const getCategoriesByWeek = categories => ({
  type: GET_CATEGORIES_BY_WEEK,
  payload: categories,
});

const getCategoriesList = categories => ({
  type: GET_CATEGORIES_LIST,
  payload: categories,
});

export const fetchCategoriesByWeek = () => (
  (dispatch) => {
    dispatch(loadResource());

    getJSON('http://localhost:8000/api/weeks')
      .then((result) => {
        dispatch(getCategoriesByWeek(result));
        dispatch(doneLoading());
      });
  }
);

export const fetchCategoriesList = () => (
  (dispatch) => {
    dispatch(loadResource());

    getJSON('http://localhost:8000/api/categories')
      .then((result) => {
        dispatch(getCategoriesList(result));
        dispatch(doneLoading());
      });
  }
);
