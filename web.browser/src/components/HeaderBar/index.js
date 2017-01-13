import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const HeaderBar = () => (
  <AppBar
    iconElementRight={
      <div>
       <FlatButton label="Login" />       
      </div>
    }
  />
)

export default HeaderBar;