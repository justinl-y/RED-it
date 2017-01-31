import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import styles from './styles.css';

const Login = ({ onLoginClick, onSignUpClick }) => (
  <div className={styles.login}>
    <Card
      style={{
        width: '480px' }}
    >
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Login" />
        </Toolbar>
        <CardText>
          <form>
            <TextField
              style={{
                width: '100%',
              }}
              hintText="Email"
              errorText="Please enter your email"
              floatingLabelText="Email"
            />
            <TextField
              style={{
                width: '100%',
              }}
              hintText="Password"
              errorText="Please enter your password"
              floatingLabelText="Password"
            />
            <RaisedButton
              backgroundColor="rgb(183, 28, 28)"
              labelColor="white"
              onClick={(e) => { e.preventDefault(); onLoginClick(); }}
              label="Login"
            />
            <RaisedButton
              onClick={(e) => { e.preventDefault(); onSignUpClick(); }}
              label="Sign Up"
            />
          </form>
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
