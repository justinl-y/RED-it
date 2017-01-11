import React, { Component } from 'react';
import Post from '../../components/Post';

class PostList extends Component {
   render() {
      return (
        <div>
            <p>Post List</p>
            <Post />
        </div>
      );
   }
}

export default PostList;