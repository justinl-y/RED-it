import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderBar from '../../components/HeaderBar';
import styles from './styles.css';

class MainLayout extends Component {
  render() {
    const { userLoggedIn } = this.props;

    return (
      <div className={styles['main-layout']}>
        <HeaderBar
          userLoggedIn={userLoggedIn}
        />
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLoggedIn: state.appData.processLogin.login,
});

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
};

// export default MainLayout;
export default connect(
  mapStateToProps,
)(MainLayout);

/* import React from 'react';
import HeaderBar from '../../components/HeaderBar';
import App from '../../containers/App';
import styles from './styles.css';

const MainLayout = () => (
  <div className={styles['main-layout']}>
    <HeaderBar />
    <App />
  </div>
);

export default MainLayout;*/

