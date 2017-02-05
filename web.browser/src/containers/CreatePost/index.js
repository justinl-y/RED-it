import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import NewPost from '../../components/NewPost';
import { fetchCategoriesList } from '../../containers/Categories/actions';
// import styles from './styles.css'

const menuItems = [
  <MenuItem key={1} value={1} primaryText="React" />,
  <MenuItem key={2} value={2} primaryText="React-DOM" />,
  <MenuItem key={3} value={3} primaryText="Redux" />,
];

/* const menuItems = this.props.categoriesList.map((category) => {
  // return <MenuItem key={category.id} value={category.id} primaryText={category} />;
  return console.log(category);
});*/

class CreatePost extends Component {
  state = {
    selectFieldValue: null,
  };

  componentWillMount() {
    this.props.fetchCategoriesList();
  }

  handleSelectChange = (
    (event, index, value) => (this.setState({ value }))
  );

  render() {
    return (
      <NewPost
        selectFieldValue={this.state.selectFieldValue}
        handleSelectChange={this.handleSelectChange.bind(this)}
        selectControlItems={menuItems}
      />
    );
  }
}

const mapStateToProps = state => ({
  categoriesList: state.appData.categories.categoriesList,
});

const mapDispatchToProps = dispatch => ({
  fetchCategoriesList: () => {
    dispatch(fetchCategoriesList());
  },
});

CreatePost.propTypes = {
  fetchCategoriesList: PropTypes.func.isRequired,
};

// export default CreatePost;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePost);
