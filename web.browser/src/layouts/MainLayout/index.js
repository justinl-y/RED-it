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

/* import React, { PropTypes } from 'react';
import BrowserRouter from 'react-router';
import HeaderBar from '../../components/HeaderBar';
import styles from './styles.css';

const MainLayout = ({ children }) => (
  <BrowserRouter>
    <div className={styles['main-layout']}>
      <HeaderBar />
      {children}
    </div>
  </BrowserRouter>
);

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout; */

