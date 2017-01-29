import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import styles from './styles.css';

const SignUp = () => (
  <div className={styles.login}>
    <Card style={{ width: '500px' }}>
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Sign Up" />
        </Toolbar>
        <CardText>
          <TextField
            style={{ width: '100%' }}
            hintText="Your name"
            errorText="Please enter your name"
            floatingLabelText="Your name"
          />
          <TextField
            style={{ width: '100%' }}
            hintText="Email"
            errorText="Please enter your email"
            floatingLabelText="Email"
          />
          <TextField
            style={{ width: '100%' }}
            hintText="Password"
            errorText="Please provide a password"
            floatingLabelText="Password"
          />
          <FlatButton
            style={{
              backgroundColor: 'rgb(183, 28, 28)',
              color: 'white',
            }}
            label="Login"
          />
        </CardText>
      </Paper>
    </Card>
  </div>
);

export default SignUp;
