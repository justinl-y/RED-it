import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import PostToolbar from '../../components/PostToolbar';
import Post from './../../components/Post';

class Posts extends Component {
  renderPosts() {
    return this.props.posts.map(e => (
      <Post
        id={e.id}
        title={e.title}
        link={e.link}
        key={e.id}
        description={e.description}
        vote={e.votes}
        onUpdateVoteClick={this.props.updateVote}
        categories={e.categories}
      />
    ));
  }

  render() {
    const { loading } = this.props;

    return (
      <div className={styles['post-list']}>
        <PostToolbar
          onNewestClick={this.props.onSortNewestClick}
          onPopularClick={this.props.onSortPopularClick}
        />
        <ul>
          {
          loading ? <div><p>Loading posts...</p></div> : this.renderPosts()
          }
        </ul>
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  onSortNewestClick: PropTypes.func.isRequired,
  onSortPopularClick: PropTypes.func.isRequired,
  updateVote: PropTypes.func.isRequired,
  // fetchPosts: PropTypes.func.isRequired,
};

export default Posts;
