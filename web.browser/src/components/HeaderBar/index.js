import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import styles from './styles.css';

const HeaderBar = ({ userLoggedIn }) => (
  <div>
    <AppBar
      className={styles['header-bar']}
      iconElementLeft={
        <IconButton>
          <Link
            className={styles['home-icon']}
            to="/"
          >
            <CommunicationImportContacts />
          </Link>
        </IconButton>
      }
      iconElementRight={
        <div >
          {
            !userLoggedIn // change to userLoggedIn
              ?
                <div>
                  <FlatButton>
                    <Link to="/posts/new">Share a new link</Link>
                  </FlatButton>
                  <FlatButton>
                    <Link to="/">Logout</Link>
                  </FlatButton>
                </div>
              :
                <div >
                  <FlatButton>
                    <Link to="/login">Login</Link>
                  </FlatButton>
                </div>
          }
        </div>
      }
    />
  </div>
);

HeaderBar.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired,
};

export default HeaderBar;

/* <ListItem
  primaryText={<Link className={styles.category} to={`${category}`} key={`${Date.now() * Math.random()}`}>{category}</Link>}
  onClick={(e) => { e.preventDefault(); onCategoryClick(category.toString()); }}
/>*/
