import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import styles from './styles.css';

const HeaderBar = () => (
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
        <FlatButton>
          <Link to="/posts/new">Share a new link</Link>
        </FlatButton>
        <FlatButton>
          <Link to="/">Logout</Link>
        </FlatButton>
        <FlatButton>
          <Link to="/login">Login</Link>
        </FlatButton>
      </div>
    }
  />
);

export default HeaderBar;

/* <ListItem
  primaryText={<Link className={styles.category} to={`${category}`} key={`${Date.now() * Math.random()}`}>{category}</Link>}
  onClick={(e) => { e.preventDefault(); onCategoryClick(category.toString()); }}
/>*/
