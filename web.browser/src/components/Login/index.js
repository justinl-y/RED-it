import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import styles from './styles.css';

const Login = ({ onLoginClick, onSignUpClick }) => (
  <div className={styles.login}>
    <Card style={{ width: '500px' }}>
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Login" />
        </Toolbar>
        <CardText>
          <TextField
            style={{
              width: '100%',
            }}
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
            onClick={(e) => { e.preventDefault(); onLoginClick(); }}
            label="Login"
          />
          <FlatButton
            onClick={(e) => { e.preventDefault(); onSignUpClick(); }}
            label="Sign Up"
          />
        </CardText>
      </Paper>
    </Card>
  </div>
);

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onSignUpClick: PropTypes.func.isRequired,
};

export default Login;
