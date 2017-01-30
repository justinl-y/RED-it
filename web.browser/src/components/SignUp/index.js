import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import styles from './styles.css';

const SignUp = ({ onSignUpLoginClick }) => (
  <div className={styles.signup}>
    <Card
      style={{
        width: '480px',
      }}
    >
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Sign Up" />
        </Toolbar>
        <CardText>
          <form>
            <TextField
              style={{
                width: '100%',
              }}
              hintText="Your name"
              errorText="Please enter your name"
              floatingLabelText="Your name"
            />
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
              errorText="Please provide a password"
              floatingLabelText="Password"
            />
            <RaisedButton
              style={{
                backgroundColor: 'rgb(183, 28, 28)',
                color: 'white',
              }}
              label="Login"
              onClick={(e) => { e.preventDefault(); onSignUpLoginClick(); }}
            />
          </form>
        </CardText>
      </Paper>
    </Card>
  </div>
);

SignUp.propTypes = {
  onSignUpLoginClick: PropTypes.func.isRequired,
};

export default SignUp;
