import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { registration } from '../../modules/registration/action';
import { selectRegistrationError } from '../../modules/registration/selectors';
import {
  selectIsFetching,
  selectIsLoggedIn
} from '../../modules/auth/selectors';

import { CustomForm, Input } from '../../components/index';

class Registration extends React.Component {
  render() {
    const { isLoggedIn, isFetching, registrationError } = this.props;

    const createAccout = data => {
      const { email, password, name, surname } = data;
      this.props.registration({ email, password, name, surname });
    };
    return (
      <>
        {isLoggedIn ? (
          <Navigate to="/profile" />
        ) : (
          <CustomForm
            isRegister
            title="Регистрация"
            buttonText="Зарегистрироваться"
            isFetching={isFetching}
            registrationError={registrationError}
            onSubmit={createAccout}
          >
            <Input id={1} name="email" type="email" label="Email*" />
            <Input id={2} name="name" type="text" label="Как вас зовут?*" />
            <Input id={3} name="surname" type="text" label="Ваша фамилия*" />
            <Input
              id={4}
              name="password"
              type="password"
              label="Придумайте пароль*"
            />
          </CustomForm>
        )}
      </>
    );
  }
}

export const RegistrationWithAuth = connect(
  state => ({
    isLoggedIn: selectIsLoggedIn(state),
    isFetching: selectIsFetching(state),
    registrationError: selectRegistrationError(state)
  }),
  { registration }
)(Registration);
