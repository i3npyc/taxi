import React from 'react';
import { Map } from './index';

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
    return (
      <>
        {!currentPage.length ? (
          <form onSubmit={this.prevent}>
            <label htmlFor="email">Email</label>
            <div>
              <input type="email" name="email" id="email" size="28" />
            </div>
            <label htmlFor="passord">Пароль</label>
            <div>
              <input type="password" name="password" id="password" size="28" />
            </div>
            <button onClick={() => this.navigateTo('map')}>Войти</button>
          </form>
        ) : (
          <section>{PAGES[currentPage]}</section>
        )}
      </>
    );
  }
}

export default Login;
