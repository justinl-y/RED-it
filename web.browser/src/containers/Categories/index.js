import React, { Component } from 'react';
import Week from '../../components/Week';
import Drawer from 'material-ui/Drawer';

class Categories extends Component {
  constructor() {
    super();
    this.state = { open: true };
  }
   render() {
      return (
        <Drawer >
          <p>Categories</p>
          <Week />
        </Drawer>
      );
   }
}

export default Categories;