import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PostToolbar from '../../components/PostToolbar';
import Post from './../../components/Post';
import { postsSortNewest, postsSortPopular, updatePostVote } from './actions';
import styles from './styles.css';

class PostList extends Component {
  componentWillMount() {
  }

  renderPosts() {
    return this.props.posts.map(e => (
      <Post
        id={e.post_id}
        title={e.title}
        link={e.link}
        key={e.post_id}
        description={e.description}
        votes={e.votes}
        onUpVoteClick={this.props.updateVoteUp}
        tags={e.tags}
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

const mapStateToProps = (state) => {
  return {
    loading: state.appData.posts.loadingResource,
    posts: state.appData.posts.posts,
  };
};

const mapDispatchToProps = dispatch => ({
  onSortNewestClick: () => {
    dispatch(postsSortNewest());
  },
  onSortPopularClick: () => {
    dispatch(postsSortPopular());
  },
  updateVoteUp: (vote) => {
    // dispatch(voteUp(id));
    dispatch(updatePostVote(vote));
  },
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  onSortNewestClick: PropTypes.func.isRequired,
  onSortPopularClick: PropTypes.func.isRequired,
  updateVoteUp: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
