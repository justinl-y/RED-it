import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import { userLogin, userSignUp, userSignUpLogin } from './actions';

class PostList extends Component {
  componentWillMount() {
  }

  render() {
    const { userToSignUp } = this.props;

    return (
      <div>
        {
          !userToSignUp ?
            <Login
              onLoginClick={this.props.login}
              onSignUpClick={this.props.signUp}
            />
          :
            <SignUp
              onSignUpLoginClick={this.props.signUpLogin}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userToSignUp: state.appData.processLogin.signup,
});

const mapDispatchToProps = dispatch => ({
  login: () => {
    dispatch(userLogin());
  },
  signUp: () => {
    dispatch(userSignUp());
  },
  signUpLogin: () => {
    dispatch(userSignUpLogin());
  },
});

PostList.propTypes = {
  userToSignUp: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  signUpLogin: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
