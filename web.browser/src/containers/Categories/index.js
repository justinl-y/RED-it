import React, { Component } from 'react';
import Week from '../../components/Week';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import * as data from '../../mock-data';

class Categories extends Component {
  constructor() {
    super();
    this.state = { 
      open: true, 
      categories: data.data.weeks,
    };
    //<i class="material-icons">import_contacts</i>
  }
   render() {
     const categories = this.state.categories;

      return (
        <Drawer open={ this.state.open }>
          <AppBar
            title="RED it"
            
            iconClassNameLeft="material-icons"
          />
          {
            categories.map( ( e ) => (
              <Week 
                key={ `${ e.id }-${ Date.now() }` }
                weekItems={ e } />
            ))
          }
        </Drawer>
      );
   }
}

export default Categories;