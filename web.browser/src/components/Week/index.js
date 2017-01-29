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
            to={`/posts/${category.toLowerCase()}`}
            key={`${Date.now() * Math.random()}`}
          >
            {
              <ListItem
                primaryText={category}
                // onClick={(e) => { e.preventDefault(); onCategoryClick(category.toString()); }}
                onClick={() => onCategoryClick(category.toString())}
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

/*
          <ListItem
            primaryText={<Link
              className={styles.category}
              to={`${category.toLowerCase()}`}
              key={`${Date.now() * Math.random()}`}
            >{category}</Link>}
            onClick={(e) => { e.preventDefault(); onCategoryClick(category.toString()); }}
            key={`${Date.now() * Math.random()}`}
          />

// < ListItem primaryText = { <Link to="a" > as </Link> } />
// <Link to='posts' key={i} style={LinkCSS}><ListItem>{category}</ListItem></Link>
// <Link to="posts/{category}">{category}</Link>

*/
