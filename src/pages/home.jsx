import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">Email</label>
        <div>
          <input type="email" name="email" id="email" size="28" />
        </div>
        <label htmlFor="passord">Пароль</label>
        <div>
          <input type="password" name="password" id="password" size="28" />
        </div>
      </form>
    );
  }
}

export default Home;
