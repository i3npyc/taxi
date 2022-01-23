import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { CustomForm } from '../../components/index';

class Registration extends React.Component {
  render() {
    const { isLoggedIn, isFetching, registrationError } = this.props;

    const listInput = [
      { id: 1, type: 'email', name: 'email', label: 'Email*' },
      { id: 2, type: 'text', name: 'name', label: 'Как вас зовут?*' },
      { id: 3, type: 'test', name: 'surname', label: 'Ваша фамилия*' },
      { id: 4, type: 'password', name: 'password', label: 'Придумайте пароль*' }
    ];
    return (
      <>
        {isLoggedIn ? (
          <Navigate to="/profile" />
        ) : (
          <CustomForm
            isRegister
            title="Регистрация"
            buttonText="Зарегистрироваться"
            listInput={listInput}
            isFetching={isFetching}
            registrationError={registrationError}
          />
        )}
      </>
    );
  }
}

export const RegistrationWithAuth = connect(state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isFetching: state.auth.isFetching,
  registrationError: state.registration.registrationError
}))(Registration);
