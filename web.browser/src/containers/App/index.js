import React, { PropTypes } from 'react';
import Categories from '../Categories';
import styles from './styles.css';

const App = ({ children }) => (
  <div className={styles.app}>
    <Categories />
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;

/* import React, { Component } from 'react';
import { Router, Match } from 'react-router';
import CreatePost from '../../containers/CreatePost';
import PostList from '../../containers/PostList';
import Categories from '../Categories';
import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Categories />
        <Match pattern="/posts/new" component={CreatePost} />
        <Match path="/posts" component={PostList} />
      </div>
    );
  }
}

export default App; */
