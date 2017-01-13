import React, { Component } from 'react';
import styles from './styles.css';
import * as data from '../../mock-data';
import Post from './../../components/Post';

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      post: data.data.posts
    }
  }
  
  handleClick( item ) {
    const newPost = this.state.post.map(( e ) => {
      if ( e.id === item.id ) {
        e.votes += 1;
      }

      return e;
    })

    this.setState({ post: newPost })
  }

  render() {
    let postList = data.data.posts;

    console.log(postList)

    return (
      <div className={ styles.postList }>
        <ul>
          { postList.map(( post ) => (
            <Post
              title={ post.title }
              link={ post.link }
              key={ post.id }
              description={ post.description }
              vote={ post.votes }
              updateVote={ this.handleClick.bind( this, post )}
              categories={ this.votes.categories }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;