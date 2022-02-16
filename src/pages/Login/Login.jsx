import React from 'react';
import { Navigate } from 'react-router-dom';

import { connect } from 'react-redux';

import propTypes from 'prop-types';

import { authenticate, setError } from '../../modules/auth/actions';
import {
  selectIsFetching,
  selectIsLoggedIn,
  selectLoginError
} from '../../modules/auth/selectors';

import { CustomForm, Input } from '../../components/index';

class Login extends React.Component {
  authenticate = data => {
    const { email, password } = data;
    this.props.authenticate({ email, password });
    this.props.setError('')
  };
  render() {
    const { loginError, isFetching, isLoggedIn } = this.props;
    console.log(this.props)

    return (
      <>
        {isLoggedIn ? (
          <Navigate to="/" />
        ) : (
          <CustomForm
            title="Войти"
            buttonText="Войти"
            onSubmit={this.authenticate}
            error={loginError}
            isFetching={isFetching}
          >
            <Input id={1} name="email" type="email" label="Email" />
            <Input id={2} name="password" type="password" label="Пароль" />
          </CustomForm>
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
    isLoggedIn: selectIsLoggedIn(state),
    loginError: selectLoginError(state),
    isFetching: selectIsFetching(state)
  }),
  { authenticate, setError }
)(Login);
