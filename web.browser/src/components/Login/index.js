import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Gandalf from 'gandalf-validator';
import styles from './styles.css';

// const Login = ({ onLoginClick, onSignUpClick }) => (
class Login extends Gandalf {
  constructor() {
    const fields = {
      email: {
        component: TextField,
        validators: ['required', 'email'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
          floatingLabelText: 'Email',
          style: {
            width: '100%',
          },
        },
        debounce: 300,
      },
      password: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Password',
          floatingLabelText: 'Password',
          style: {
            width: '100%',
          },
          type: 'password',
        },
      },
    };

    super(fields);
  }

  handleSubmit() {
    const data = this.getCleanFormData();

    if (!data) return;
    console.log(data);

    // submit to redux
    console.log('Going to redux');
  }

  render() {
    const fields = this.state.fields;

    return (
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
                { fields.email.element }
                { fields.password.element }

                <RaisedButton
                  backgroundColor="rgb(183, 28, 28)"
                  labelColor="white"
                  // onClick={(e) => { e.preventDefault(); this.props.onLoginClick(); }}
                  onClick={(e) => { e.preventDefault(); this.handleSubmit(); }}
                  label="Login"
                />
                <FlatButton
                  onClick={(e) => { e.preventDefault(); this.props.onSignUpClick(); }}
                  label="Sign Up"
                />
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onSignUpClick: PropTypes.func.isRequired,
};

export default Login;

/*
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
/> */
