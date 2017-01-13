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
      //orderBy: 
    }
  }

  // re-sort the posts 
  componentDidUpdate( posts ) {
    console.log('something happened');
  }

  // sort by votes
  sortPopular( posts ){
    const popularPosts = posts.sort( ( a, b ) => {
      return ( Number( b.votes ) - Number( a.votes ) );
    })

    this.setState({ posts: popularPosts });
  };

  // sort by id
  sortNewest( posts ){
    const newestPosts = posts.sort( ( a, b ) => {
      return ( Number( a.id ) - Number( b.id ) );
    })

    this.setState({ posts: newestPosts });
  }; 

  updateVote( item ) {
    const votedPosts = this.state.posts.map(( e ) => {
      if ( e.id === item.id ) {
        e.votes += 1;
      }

      return e;
    })

    this.setState({ posts: votedPosts })
  };

  renderPosts( postList ) {
    
  }

  render() {
    const postList = this.state.posts;

    return (
      <div className={ styles[ 'post-list' ] }>
        <Toolbar>
          <ToolbarTitle text="Posts" />
          <ToolbarGroup>
            <ToolbarTitle text="Sort:" />
            <FlatButton label="Newest" onClick={ this.sortNewest.bind( this, postList ) }/>
            <FlatButton label="Popular" onClick={ this.sortPopular.bind( this, postList ) }/>
          </ToolbarGroup>
        </Toolbar>
        <ul>
          { 
            postList.map(( post ) => (
              <Post
                title={ post.title }
                link={ post.link }
                key={ post.id }
                description={ post.description }
                vote={ post.votes }
                updateVote={ this.updateVote.bind( this, post )}
                categories={ post.categories }
              />
            ))
          }
        </ul>
      </div>
    );
  };
}

export default PostList;