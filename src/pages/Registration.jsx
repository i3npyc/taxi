import React from 'react';
import { Map } from './index';

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
    return (
      <>
        {currentPage === '' ? (
          <form onSubmit={this.prevent}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Адрес электронной почты"
                size="28"
              />
            </div>
            <div>
              <input type="text" name="firstname" placeholder="Имя" size="28" />
            </div>
            <div>
              <input
                type="text"
                name="lastname"
                placeholder="Фамилия"
                size="28"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                size="28"
              />
            </div>
            <button onClick={() => this.navigateTo('map')}>
              Зарегистрироваться
            </button>
          </form>
        ) : (
          <div>{PAGE[currentPage]}</div>
        )}
      </>
    );
  }
}

export default Registration;
