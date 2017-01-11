import React, { Component } from 'react';
import Week from '../../components/Week';

class Categories extends Component {
   render() {
      return (
        <div>
            <p>Categories</p>
            {<Week />}
        </div>
      );
   }
}

export default Categories;