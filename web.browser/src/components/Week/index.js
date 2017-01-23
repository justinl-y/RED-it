import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const Week = ({ weekItems, onCategoryClick }) => (
  <div>
    <List>
      <Subheader>{ weekItems.title }</Subheader>
      <Divider />
      {
        weekItems.categories.map(category => (
          <ListItem
            key={`${category}-${Date.now()}`}
            primaryText={category}
            onClick={(f) => { f.preventDefault(); onCategoryClick(category.toString()); }}
          />
        ))
      }
    </List>
    <Divider />
  </div>
);

Week.propTypes = {
  weekItems: PropTypes.object.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default Week;
