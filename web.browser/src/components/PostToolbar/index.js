import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';

const PostToolbar = ({ onSortNewestClick, onSortPopularClick }) => (
  <Toolbar className={styles['posts-toolbar']}>
    <ToolbarTitle text="Posts" />
    <ToolbarGroup>
      <ToolbarTitle text="Sort:" />
      <FlatButton
        label="Newest"
        onClick={onSortNewestClick}
      />
      <FlatButton
        label="Popular"
        onClick={onSortPopularClick}
      />
    </ToolbarGroup>
  </Toolbar>
);

PostToolbar.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSortNewestClick: PropTypes.func.isRequired,
  onSortPopularClick: PropTypes.func.isRequired,
};

export default PostToolbar;
