import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import Categories from '../../containers/Categories';
import Welcome from '../../containers/Welcome';
import Login from '../../containers/Login';
import CreatePost from '../../containers/CreatePost';
import PostList from '../../containers/PostList';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
        {<Categories />}
        {<Welcome />}
        {<Login />}
        {<CreatePost />}
        {<PostList />}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
