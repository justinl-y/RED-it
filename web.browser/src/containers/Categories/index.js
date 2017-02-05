import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import Week from '../../components/Week';
import { fetchPosts } from '../PostList/actions';
import { fetchCategories } from './actions';
import styles from './styles.css';

class Categories extends Component {
  componentWillMount() {
    this.props.fetchCategories();
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
  categories: state.appData.categories.categories,
  loading: state.appData.categories.loadingResource,
});

const mapDispatchToProps = dispatch => ({
  /* filterPosts: (category) => {
    dispatch(filterPosts(category));
  },*/
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
  fetchPosts: (id) => {
    dispatch(fetchPosts(id));
  },
});

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  // filterPosts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,

  fetchPosts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
