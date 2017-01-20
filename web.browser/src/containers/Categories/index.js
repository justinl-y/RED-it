import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Week from '../../components/Week';
import mockData from '../../mock-data';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
      categories: mockData.weeks,
    };
    // <i class="material-icons">import_contacts</i>
  }
  render() {
    const categories = this.state.categories;

    return (
      <Drawer open={this.state.open}>
        <AppBar
          title="RED it"
          iconClassNameLeft="material-icons"
        />
        {
          categories.map(e => (
            <Week
              key={`${e.id}-${Date.now()}`}
              weekItems={e}
            />
            ))
          }
      </Drawer>
    );
  }
}

export default Categories;
