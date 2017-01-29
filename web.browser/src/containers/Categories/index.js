import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import Week from '../../components/Week';
import { filterPosts } from '../PostList/actions';
import { fetchCategories } from './actions';

class Categories extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <Drawer>
        <AppBar
          title="RED it"
          iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
        />
        {
          categories.map(e => (
            <Week
              key={`${Date.now() * Math.random()}`}
              weekItems={e}
              onCategoryClick={this.props.filterPosts}
            />
            ))
          }
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.appData.categories.categories,
  loading: state.appData.categories.loadingResource,
});

const mapDispatchToProps = dispatch => ({
  filterPosts: (category) => {
    dispatch(filterPosts(category));
  },
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
});

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterPosts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
