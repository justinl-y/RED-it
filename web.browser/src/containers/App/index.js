import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Categories from '../Categories';
import styles from './styles.css';

class App extends Component {
  componentWillMount() {
    if (!this.props.userLoggedIn) {
      browserHistory.push('/login');
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <Categories />
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLoggedIn: state.appData.processLogin.login,
});

App.propTypes = {
  children: PropTypes.object.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
)(App);

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

/* const App = ({ children }) => (
  <div className={styles.app}>
    <Categories />
    { children }
  </div>
);*/
