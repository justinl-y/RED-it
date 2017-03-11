import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';

import MenuItem from 'material-ui/MenuItem';
import NewPost from '../../components/NewPost';
import { fetchCategoriesList } from '../../containers/Categories/actions';

import { insertPost } from './actions';

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
    const { editPost } = this.props;

    return (
      <div>
        {
          !editPost ?
            <NewPost
              selectControlItems={this.renderControlItems()}
              onSubmitClick={this.props.insertPost}
              userId={this.props.userId}
            />
          :
           null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.appData.categories.categoriesList,
  editPost: state.appData.processPost.editPost,
  userId: state.appData.processLogin.userId,
});

const mapDispatchToProps = dispatch => ({
  fetchCategoriesList: () => {
    dispatch(fetchCategoriesList());
  },
  insertPost: (post) => {
    dispatch(insertPost(post));
  },
});

ProcessPost.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCategoriesList: PropTypes.func.isRequired,
  editPost: PropTypes.bool.isRequired,
  insertPost: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProcessPost);
