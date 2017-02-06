import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import NewPost from '../../components/NewPost';
import { fetchCategoriesList } from '../../containers/Categories/actions';
// import styles from './styles.css'

class CreatePost extends Component {
  /* state = {
    selectFieldValue: null,
  }; */

  componentWillMount() {
    this.props.fetchCategoriesList();
  }

  /* handleSelectChange = (
    (event, index, value) => (this.setState({ value }))
  ); */

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
    return (
      <NewPost
        // selectFieldValue={this.state.selectFieldValue}
        // handleSelectChange={this.handleSelectChange.bind(this)}
        selectControlItems={this.renderControlItems()}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.appData.categories.categoriesList,
});

const mapDispatchToProps = dispatch => ({
  fetchCategoriesList: () => {
    dispatch(fetchCategoriesList());
  },
});

CreatePost.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCategoriesList: PropTypes.func.isRequired,
};

// export default CreatePost;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePost);
