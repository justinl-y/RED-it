import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';

const PostToolbar = ({ onNewestClick, onPopularClick }) => (
  <Toolbar className={styles['posts-toolbar']}>
    <ToolbarTitle text="Posts" />
    <ToolbarGroup>
      <ToolbarTitle text="Sort:" />
      <FlatButton
        label="Newest"
        onClick={(e) => { e.preventDefault(); onNewestClick(); }}
      />
      <FlatButton
        label="Popular"
        onClick={(e) => { e.preventDefault(); onPopularClick(); }}
      />
    </ToolbarGroup>
  </Toolbar>
);

PostToolbar.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onNewestClick: PropTypes.func.isRequired,
  onPopularClick: PropTypes.func.isRequired,
};

export default PostToolbar;
