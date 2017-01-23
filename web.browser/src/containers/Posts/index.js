import React, { Component } from 'react';
import styles from './styles.css';
import PostToolbar from '../../components/PostToolbar';
import Post from './../../components/Post';

class Posts extends Component {
  render() {
    return (
      <div className={styles['post-list']}>
        <PostToolbar
          sortNewest={this.sortNewest}
          sortPopular={this.sortPopular}
        />
        <ul>
          {
          this.postList.map(e => (
            <Post
              title={e.title}
              link={e.link}
              key={e.id}
              description={e.description}
              vote={e.votes}
              updateVote={this.updateVote}
              categories={e.categories}
            />
            ))
           }
        </ul>
      </div>
    );
  }
}

export default Posts;
