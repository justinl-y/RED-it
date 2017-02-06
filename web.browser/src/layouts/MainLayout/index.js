import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderBar from '../../components/HeaderBar';
import { userLogout } from '../../containers/ProcessLogin/actions';
import styles from './styles.css';

class MainLayout extends Component {
  render() {
    const { userLoggedIn, userToLogout } = this.props;

    return (
      <div className={styles['main-layout']}>
        <HeaderBar
          userLoggedIn={userLoggedIn}
          userLogout={userToLogout}
        />
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLoggedIn: state.appData.processLogin.login,
});

const mapDispatchToProps = dispatch => ({
  userToLogout: () => {
    dispatch(userLogout());
  },
});

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
  userToLogout: PropTypes.func.isRequired,
};

// export default MainLayout;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
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

