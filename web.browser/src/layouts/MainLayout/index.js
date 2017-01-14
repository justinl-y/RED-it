import React, { PropTypes } from 'react';
import HeaderBar from '../../components/HeaderBar';
import styles from './styles.css';

const MainLayout = ({ children }) => {
  return (
    <div className={ styles[ 'main-layout' ]}>
      <HeaderBar />
      { children }
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;