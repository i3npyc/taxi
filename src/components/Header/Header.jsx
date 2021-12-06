import React from 'react';

const Header = ({ navigateTo }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigateTo('login')}>Логин</button>
          </li>
          <li>
            <button onClick={() => navigateTo('profile')}>Профиль</button>
          </li>
          <li>
            <button onClick={() => navigateTo('map')}>Карта</button>
          </li>
          <li>
            <button onClick={() => navigateTo('registration')}>
              Регистрация
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
