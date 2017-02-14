import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Gandalf from 'gandalf-validator';
import styles from './styles.css';

class SignUp extends Gandalf {
  constructor({ onSignUpLoginClick }) {
    const fields = {
      firstName: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'First Name',
          floatingLabelText: 'First Name',
          style: {
            width: '50%',
          },
        },
      },
      lastName: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Last Name',
          floatingLabelText: 'Last Name',
          style: {
            width: '50%',
          },
        },
      },
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

    super(fields, onSignUpLoginClick);
  }

  handleSubmit() {
    const register = this.getCleanFormData();

    if (!register) return;

    this.props.onSignUpLoginClick({ register });
  }

  render() {
    const fields = this.state.fields;

    return (
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
                { fields.firstName.element }
                { fields.lastName.element }
                { fields.email.element }
                { fields.password.element }

                <RaisedButton
                  backgroundColor="rgb(183, 28, 28)"
                  labelColor="white"
                  label="Login"
                  onClick={(e) => { e.preventDefault(); this.handleSubmit(); }}
                />
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

SignUp.propTypes = {
  onSignUpLoginClick: PropTypes.func.isRequired,
};

export default SignUp;

/*
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
/> */
