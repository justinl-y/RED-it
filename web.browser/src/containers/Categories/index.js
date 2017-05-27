import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';

import Week from '../../components/Week';
import { fetchCategoriesByWeek } from './actions';
import { fetchPosts } from '../PostList/actions';

import styles from './styles.css';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategoriesByWeek();
  }

  renderCategories() {
    return this.props.categories.map(e => (
      <Week
        key={`${Date.now() * Math.random()}`}
        weekItems={e}
        onCategoryClick={this.props.fetchPosts}
      />
    ));
  }

  render() {
    const { loading } = this.props;

    return (
      <Drawer>
        <AppBar
          title="RED it"
          iconElementLeft={
            <IconButton>
              <Link
                className={styles['home-icon']}
                to="/"
              >
                <CommunicationImportContacts />
              </Link>
            </IconButton>
          }
        />
        {
          loading ? <div><p>Loading categories...</p></div> : this.renderCategories()
        }
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.appData.categories.loadingResource,
  categories: state.appData.categories.categories,
});

const mapDispatchToProps = dispatch => ({
  fetchCategoriesByWeek: () => {
    dispatch(fetchCategoriesByWeek());
  },
  fetchPosts: (id) => {
    dispatch(fetchPosts(id));
  },
});

Categories.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchCategoriesByWeek: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
