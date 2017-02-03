import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import styles from './styles.css';

const Week = ({ weekItems, onCategoryClick }) => (
  <div>
    <List>
      <Subheader>{ weekItems.title }</Subheader>
      <Divider />
      {
        weekItems.categories.map(category => (
          <Link
            className={styles.category}
            to={`/posts/${category[0]}`}
            key={`${Date.now() * Math.random()}`}
          >
            {
              <ListItem
                primaryText={category[1]}
                // onClick={(e) => { e.preventDefault(); onCategoryClick(category.toString()); }}
                onClick={() => onCategoryClick(category[0])}
              />
            }
          </Link>
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
