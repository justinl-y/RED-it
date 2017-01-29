import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import { userLogin, userSignUp } from '../ProcessLogin/actions';

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
              onLoginClick={this.props.login}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userSignedUp: state.appData.processLogin.signup,
});

const mapDispatchToProps = dispatch => ({
  onLoginClick: () => {
    dispatch(userLogin());
  },
  onSignUpClick: () => {
    dispatch(userSignUp());
  },
});

PostList.propTypes = {
  userToSignUp: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
