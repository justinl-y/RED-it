import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const HeaderBar = () => (
  <AppBar
    title="RED it"
    iconElementRight={
      <div>
       <FlatButton label="Login" />       
      </div>
    }
  />
)

export default HeaderBar;