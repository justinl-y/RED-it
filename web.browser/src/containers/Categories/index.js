import React, { Component } from 'react';
import Week from '../../components/Week';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class Categories extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }
   render() {
      return (
        <Drawer open={ this.state.closed }>
          <AppBar
            title="RED it"
          />
          <p>Categories</p>
          <Week />
        </Drawer>
      );
   }
}

export default Categories;