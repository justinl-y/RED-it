import React, { Component } from 'react';
import styles from './styles.css';

class Welcome extends Component {
   render() {
      return (
        <div className={ styles[ 'welcome' ] }>
            <p>Welcome</p>
        </div>
      );
   }
}

export default Welcome;