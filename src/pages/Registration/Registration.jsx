import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { registration } from '../../modules/registration/action';

import { CustomForm } from '../../components/index';

class Registration extends React.Component {
  setRegistration = e => {
    e.preventDefault();
    const { email, password, name, surname } = e.target;
    this.props.registration({
      email: email.value,
      password: password.value,
      name: name.value,
      surname: surname.value
    });
  };
  render() {
    const { isLoggedIn, isFetching } = this.props;

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
            register
            title="Регистрация"
            buttonText="Зарегистрироваться"
            listInput={listInput}
            onSubmit={this.setRegistration}
            isFetching={isFetching}
          />
        )}
      </>
    );
  }
}

export const RegistrationWithAuth = connect(
  state => ({
    isLoggedIn: state.auth.isLoggedIn,
    isFetching: state.auth.isFetching
  }),
  { registration }
)(Registration);
