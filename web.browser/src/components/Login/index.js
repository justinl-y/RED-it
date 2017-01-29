import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import styles from './styles.css';

const Login = () => (
  <div className={styles.login}>
    <Card style={{ width: '500px' }}>
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Login" />
        </Toolbar>
        <CardText>
          <TextField
            style={{ width: '100%' }}
            hintText="Email"
            errorText="Please enter your email"
            floatingLabelText="Email"
          />
          <TextField
            style={{ width: '100%' }}
            hintText="Password"
            errorText="Please enter your password"
            floatingLabelText="Password"
          />
          <FlatButton
            style={{
              backgroundColor: 'rgb(183, 28, 28)',
              color: 'white',
            }}
            label="Login"
          />
          <FlatButton
            label="Sign Up"
          />
        </CardText>
      </Paper>
    </Card>
  </div>
);

export default Login;
