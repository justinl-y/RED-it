import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import PostToolbar from '../../components/PostToolbar';
import Post from './../../components/Post';
import { postsSortNewest, postsSortPopular, voteUp } from '../PostList/actions';

// import data from '../../mock-data';
// import store from '../../redux/stores/createStore';
// import { voteUp, voteDown, sortPopular, sortNewest } from '../../redux/posts';

class PostList extends Component {
  /* constructor(props) {
    super(props);

    // this.state = {
      // posts: data.posts,
      // orderBy: 'newest',
    // };
  }*/

  // re-sort the posts - needs work
  /* componentDidUpdate(posts) {
    switch ( this.state.orderBy ) {
      case 'newest':
        //console.log('newest happened');
        break;
      case 'popular':
        //console.log('popular happened');
        break;
      default:
        break;
    }
  } */

  // sort by votes
  /* sortPopular(posts) {
    const popularPosts = posts.sort((a, b) => {
      return (Number(b.votes) - Number(a.votes));
    });

    this.setState({ posts: popularPosts });
    this.setState({ orderBy: 'popular' });
  }

  // sort by id
  sortNewest(posts) {
    const newestPosts = posts.sort((a, b) => {
      return (Number(a.id) - Number(b.id));
    });

    this.setState({ posts: newestPosts });
    this.setState({ orderBy: 'newest' });
  }

  updateVote(item) {
    const votedPosts = this.state.posts.map((e) => {
      if (e.id === item.id) {
        e.votes += 1;
        // store.dispatch(voteUp(e.id)); // updates with redux
      }

      return e;
    });

    this.setState({ posts: votedPosts });
  }
  }*/

  render() {
    // const postList = this.state.posts;
    const { posts } = this.props;

    // console.log(this.props);
    return (
      <div className={styles['post-list']}>
        <PostToolbar
          onNewestClick={this.props.onSortNewestClick}
          onPopularClick={this.props.onSortPopularClick}
        />
        <ul>
          {
            posts.map(e => (
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
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.appData.posts,
});

const mapDispatchToProps = dispatch => ({
  onSortNewestClick: () => {
    dispatch(postsSortNewest());
  },
  onSortPopularClick: () => {
    dispatch(postsSortPopular());
  },
  updateVote: (id) => {
    dispatch(voteUp(id));
  },
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSortNewestClick: PropTypes.func.isRequired,
  onSortPopularClick: PropTypes.func.isRequired,
  updateVote: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
