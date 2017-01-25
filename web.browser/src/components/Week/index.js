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
            to={`posts/${category}`}
            key={`${category}-${Date.now()}`}
          >
            <ListItem
              primaryText={category}
              onClick={(e) => { e.preventDefault(); onCategoryClick(category.toString()); }}
            />
          </Link>
        ))
      }
    </List>
    <Divider />
  </div>
);


// <Link to='posts' key={i} style={LinkCSS}><ListItem>{category}</ListItem></Link>
// <Link to="posts/{category}">{category}</Link>

Week.propTypes = {
  weekItems: PropTypes.object.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

 /*

weekItems.categories.map(category => (
  <ListItem
    key={`${category}-${Date.now()}`}
    primaryText={category}
    onClick={(f) => { f.preventDefault(); onCategoryClick(category.toString()); }}
  />
))

// 
*/

export default Week;


