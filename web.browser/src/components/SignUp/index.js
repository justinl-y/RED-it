import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Gandalf from 'gandalf-validator';
import styles from './styles.css';

// const SignUp = ({ onSignUpLoginClick }) => (

class SignUp extends Gandalf {
  constructor() {
    const fields = {
      name: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Your Name',
          floatingLabelText: 'Name',
          style: {
            width: '100%',
          },
          type: 'password',
        },
        debounce: 300,
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
          debounce: 300,
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
                { fields.name.element }
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
