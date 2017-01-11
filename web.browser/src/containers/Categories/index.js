import React, { Component } from 'react';
import Week from '../Week';

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