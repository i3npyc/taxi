import React from 'react';
import propTypes from 'prop-types';
import { CustomForm } from '../components/index';
import { connect } from 'react-redux';
import { authenticate } from '../auth/actions'

class Login extends React.Component {
  goToProfile = () => {
    this.props.navigate('profile');
  };
  authenticate = e => {
    e.preventDefault();
    const { email, password } = e.target;
    this.props.authenticate(email.value, password.value);
  };
  render() {
    const listInput = [
      { id: 1, type: 'email', name: 'email', label: 'Email' },
      { id: 2, type: 'password', name: 'password', label: 'Пароль' }
    ];
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            <button onClick={this.goToProfile}>go to profile</button>
          </p>
        ) : (
          <CustomForm
            title="Войти"
            buttonText="Войти"
            listInput={listInput}
            onSubmit={this.authenticate}
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
  state => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Login);
