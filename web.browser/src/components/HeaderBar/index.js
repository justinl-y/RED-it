import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import styles from './styles.css';

const HeaderBar = ({ userLoggedIn, userLogout }) => (
  <div>
    <AppBar
      className={styles['header-bar']}
      iconElementLeft={
        <IconButton>
          <Link
            to="/"
          >
            <CommunicationImportContacts
              className={styles['home-icon']}
            />
          </Link>
        </IconButton>
      }
      iconElementRight={
        <div>
          {
            userLoggedIn // change to userLoggedIn
              ?
                <div>
                  <Link
                    to="/posts/new"
                  >
                    <FlatButton
                      className={styles['menu-item']}
                      label="Add A New Post"
                    />
                  </Link>
                  <Link
                    to="/login"
                  >
                    <FlatButton
                      className={styles['menu-item']}
                      label="Logout"
                      onClick={userLogout}
                    />
                  </Link>
                </div>
              :
                <div >
                  <Link
                    to="/login"
                  >
                    <FlatButton
                      className={styles['menu-item']}
                      label="Login"
                    />
                  </Link>
                </div>
          }
        </div>
      }
    />
  </div>
);

HeaderBar.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired,
  userLogout: PropTypes.func.isRequired,
};

export default HeaderBar;

