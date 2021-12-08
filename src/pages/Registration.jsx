import React from 'react';
import { Map } from './index';
import { CustomForm } from '../components/index';

class Registration extends React.Component {
  state = { currentPage: '' };

  prevent = e => {
    e.preventDefault();
  };
  navigateTo = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const { currentPage } = this.state;
    const PAGE = { map: <Map /> };
    const listInput = [
      { id: 1, type: 'email', name: 'email', label: 'Email*' },
      { id: 2, type: 'text', name: 'name', label: 'Как вас зовут?*' },
      { id: 3, type: 'password', name: 'password', label: 'Придумайте пароль*' }
    ];
    return (
      <>
        {currentPage === '' ? (
          <CustomForm
            register
            title="Регистрация"
            buttonText="Зарегистрироваться"
            listInput={listInput}
            navigateTo={this.navigateTo}
            prevent={this.prevent}
          />
        ) : (
          <div>{PAGE[currentPage]}</div>
        )}
      </>
    );
  }
}

export default Registration;
