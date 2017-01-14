import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const PostToolbar = ({ sortNewest, sortPopular }) => (
    <Toolbar>
        <ToolbarTitle text="Posts" />
        <ToolbarGroup>
        <ToolbarTitle text="Sort:" />
        <FlatButton label="Newest" onClick={ sortNewest } />
        <FlatButton label="Popular" onClick={ sortPopular } />
        </ToolbarGroup>
    </Toolbar>
)

PostToolbar.propTypes = {
  sortNewest: PropTypes.func.isRequired,
  sortPopular: PropTypes.func.isRequired,
};

export default PostToolbar;