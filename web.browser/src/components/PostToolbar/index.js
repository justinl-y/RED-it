import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';

// import { postsSortNewest, postsSortPopular } from '../../containers/PostList/actions';

const PostToolbar = ({ onNewestClick, onPopularClick }) => (
  <Toolbar className={styles['posts-toolbar']}>
    <ToolbarTitle text="Posts" />
    <ToolbarGroup>
      <ToolbarTitle text="Sort:" />
      <FlatButton
        label="Newest"
        // onClick={onSortNewestClick}
        onClick={(e) => { e.preventDefault(); onNewestClick(); }}
        // onClick={(e) => { e.preventDefault(); console.log('newest clicked'); }}
      />
      <FlatButton
        label="Popular"
        // onClick={onSortPopularClick}
        onClick={(e) => { e.preventDefault(); onPopularClick(); }}
        // onClick={(e) => { e.preventDefault(); console.log('popular clicked'); }}
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


