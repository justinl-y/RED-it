import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';

const HeaderBar = () => (
  <AppBar
    iconElementRight={
      <div className={styles['header-bar']}>
        <FlatButton>
          <Link to="/posts/new">Share a new link</Link>
        </FlatButton>
        <FlatButton>
          <Link to="/">Home</Link>
        </FlatButton>
      </div>
    }
  />
);

export default HeaderBar;

/* <ListItem
  primaryText={<Link className={styles.category} to={`${category}`} key={`${Date.now() * Math.random()}`}>{category}</Link>}
  onClick={(e) => { e.preventDefault(); onCategoryClick(category.toString()); }}
/>*/
