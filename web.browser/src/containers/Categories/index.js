import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import Week from '../../components/Week';
import { selectCategory } from '../Categories/actions';

class Categories extends Component {
  render() {
    // const categories = this.state.categories;
    const { categories } = this.props;

    // console.log(categories);

    return (
      <Drawer>
        <AppBar
          title="RED it"
          iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
        />
        {
          categories.map(e => (
            <Week
              key={`${e.id}-${Date.now()}`}
              weekItems={e}
              onCategoryClick={this.props.selectCategory}
            />
            ))
          }
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  // categories: state.appData.weeks,
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  selectCategory: (name) => {
    dispatch(selectCategory(name));
  },
});

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
