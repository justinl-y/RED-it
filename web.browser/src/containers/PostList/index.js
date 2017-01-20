import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import styles from './styles.css';
import PostToolbar from '../../components/PostToolbar';
import Post from './../../components/Post';
// import data from '../../mock-data';
// import store from '../../redux/stores/createStore';
// import { voteUp, voteDown, sortPopular, sortNewest } from '../../redux/posts';

import { postsSortNewest, postsSortPopular } from '../PostList/actions';

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
    const { posts, onSortNewestClick, onSortPopularClick } = this.props;
    console.log(posts);
    return (
      <div className={styles['post-list']}>
        <PostToolbar
          onclickSortNewest={(e) => {
            e.preventDefault();
            onSortNewestClick(posts);
          }}
          onClickSortPopular={(e) => {
            e.preventDefault();
            onSortPopularClick(posts);
          }}
        />
        <ul>
          {
            posts.map(e => (
              <Post
                title={e.title}
                link={e.link}
                key={e.id}
                description={e.description}
                vote={e.votes}
                updateVote={this.updateVote.bind(this, e)}
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
  onSortNewestClick: (postList) => {
    dispatch(postsSortNewest(postList));
  },
  onSortPopularClick: (postList) => {
    dispatch(postsSortPopular(postList));
  },
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSortNewestClick: PropTypes.func.isRequired,
  onSortPopularClick: PropTypes.func.isRequired,
};

// export default PostList;
export default connect(mapStateToProps, mapDispatchToProps)(PostList);

/* {sortNewest={this.sortNewest.bind(this, postList)}
sortPopular={this.sortPopular.bind(this, postList)}} */
