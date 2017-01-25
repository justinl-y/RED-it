import React, { PropTypes } from 'react';
import HeaderBar from '../../components/HeaderBar';
import styles from './styles.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles['main-layout']}>
      <HeaderBar />
      { children }
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;

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

