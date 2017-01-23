// const categoriesInitialState = { categories: undefined };

import mockData from '../../mock-data'; // should be from store?

const categoriesInitialState = mockData.weeks;

// action type
const SELECT_CATEGORY = 'SELECT_CATEGORY';

// action creator
export const selectCategory = name => ({
  type: SELECT_CATEGORY,
  payload: { name },
});

export default (state = categoriesInitialState, action) => {
  // console.log(state);
  switch (action.type) {
    case SELECT_CATEGORY:
      console.log(action);
      // console.log(`Category ID: ${action.payload}`);
      return state;
    default:
      return state;
  }
};
