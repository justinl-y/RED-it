import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import styles from './styles.css';

const HeaderBar = () => {
  return (
    <AppBar
      iconElementRight={
        <div className={styles['header-bar']}>
          <FlatButton>
            <Link to="posts/new">Share a new link</Link>
          </FlatButton>
          <FlatButton>
            <Link to="/">Home</Link>
          </FlatButton>
        </div>
      }
    />
  );
};

export default HeaderBar;
