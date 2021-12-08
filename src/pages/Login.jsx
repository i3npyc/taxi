import React from 'react';
import { Map } from './index';
import { CustomForm } from '../components/index';

class Login extends React.Component {
  state = { currentPage: '' };

  prevent = e => {
    e.preventDefault();
  };
  navigateTo = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const { currentPage } = this.state;
    const PAGES = {
      map: <Map />
    };
    const listInput = [
      { id: 1, type: 'email', name: 'email', label: 'Email' },
      { id: 2, type: 'password', name: 'password', label: 'Пароль' }
    ];
    return (
      <>
        {!currentPage.length ? (
          <CustomForm
            title="Войти"
            buttonText="Войти"
            listInput={listInput}
            navigateTo={this.navigateTo}
            prevent={this.prevent}
          />
        ) : (
          <section>{PAGES[currentPage]}</section>
        )}
      </>
    );
  }
}

export default Login;
