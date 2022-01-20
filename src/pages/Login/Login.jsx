import React from 'react';
import { Navigate } from 'react-router-dom';

import { connect } from 'react-redux';

import propTypes from 'prop-types';

import { authenticate } from '../../modules/auth/actions';

import { CustomForm } from '../../components/index';


class Login extends React.Component {
  authenticate = e => {
    e.preventDefault();
    const { email, password } = e.target;
    this.props.authenticate(email.value, password.value);
  };
  render() {
    const { loginError, isFetching } = this.props

    const listInput = [
      { id: 1, type: 'email', name: 'email', label: 'Email' },
      { id: 2, type: 'password', name: 'password', label: 'Пароль' }
    ];
    return (
      <>
        {this.props.isLoggedIn ? (
          <Navigate to="/" />
        ) : (
          <CustomForm
            title="Войти"
            buttonText="Войти"
            listInput={listInput}
            onSubmit={this.authenticate}
            error={loginError}
            isFetching={isFetching}
          />
        )}
      </>
    );
  }
}

Login.propTypes = {
  navigate: propTypes.func,
  logIn: propTypes.func,
  isLoggedIn: propTypes.bool
};

export const LoginWithAuth = connect(
  state => ({
    isLoggedIn: state.auth.isLoggedIn,
    loginError: state.auth.loginError,
    isFetching: state.auth.isFetching
  }),
  { authenticate }
)(Login);
