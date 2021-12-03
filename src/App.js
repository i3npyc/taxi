import React, { useState } from 'react';
import { Home, About, Profile } from './pages/index';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const PAGES = {
    home: <Home />,
    about: <About />,
    profile: <Profile />
  };
  const navigateTo = page => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={() => navigateTo('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => navigateTo('about')}>About</button>
            </li>
            <li>
              <button onClick={() => navigateTo('profile')}>Profile</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>{PAGES[currentPage]}</section>
      </main>
    </div>
  );
};

export default App;
