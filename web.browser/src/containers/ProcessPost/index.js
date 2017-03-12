import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import PostForm from '../../components/PostForm';
import { fetchCategoriesList } from '../../containers/Categories/actions';
import { insertPost, updatePost } from './actions';

class ProcessPost extends Component {
  componentWillMount() {
    this.props.fetchCategoriesList();
  }

  renderControlItems() {
    return this.props.categories.map(e => (
      <MenuItem
        key={e.category_id}
        value={e.category_id}
        primaryText={e.title}
      />
    ));
  }

  render() {
    const { editPost, title } = this.props;

    return (
      <div>
        {
          !editPost ?
            <PostForm
              userId={this.props.userId}
              title={title}
              selectControlItems={this.renderControlItems()}
              onSubmitClick={this.props.insertPost}
            />
          :
            <PostForm
              userId={this.props.userId}
              title={title}
              selectControlItems={this.renderControlItems()}
              onSubmitClick={this.props.updatePost}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.appData.categories.categoriesList,
  editPost: state.appData.processPost.editPost,
  userId: state.appData.processLogin.userId,
  title: state.appData.processPost.title,
});

const mapDispatchToProps = dispatch => ({
  fetchCategoriesList: () => {
    dispatch(fetchCategoriesList());
  },
  insertPost: (post) => {
    dispatch(insertPost(post));
  },
  updatePost: (post) => {
    dispatch(updatePost(post));
  },
});

ProcessPost.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCategoriesList: PropTypes.func.isRequired,
  editPost: PropTypes.bool.isRequired,
  insertPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProcessPost);
