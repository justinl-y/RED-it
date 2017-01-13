import React, { Component } from 'react';
import styles from './styles.css';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Post from './../../components/Post';
import * as data from '../../mock-data';

class PostList extends Component {
  constructor() {
    super();

    this.state = {
      posts: data.data.posts,
      //orderBy: orderBy
    }
  }

  // re-sort the posts 
  componentDidUpdate() {

  }

  // sort by votes
  sortPopular( posts ){

  };

  // sort by id
  sortNewest( posts ){

  };

  updateVote( item ) {
    const newPost = this.state.posts.map(( e ) => {
      if ( e.id === item.id ) {
        e.votes += 1;
      }

      return e;
    })

    this.setState({ posts: newPost })
  };

  render() {
    const postList = data.data.posts;
    //console.log(postList)

    return (
      <div className={ styles[ 'post-list' ] }>
        <Toolbar>
          <ToolbarTitle text="Posts" />
          <ToolbarGroup>
            <ToolbarTitle text="Sort:" />
            <FlatButton label="Newest" />
            <FlatButton label="Popular" />
          </ToolbarGroup>
        </Toolbar>
        <ul>
          { postList.map(( post ) => (
            <Post
              title={ post.title }
              link={ post.link }
              key={ post.id }
              description={ post.description }
              vote={ post.votes }
              updateVote={ this.updateVote.bind( this, post )}
              categories={ post.categories }
            />
          ))}
        </ul>
      </div>
    );
  };
}

export default PostList;