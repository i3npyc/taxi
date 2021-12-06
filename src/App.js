import React, { useState } from 'react';
import { Login, Map, Profile, Registration } from './pages/index';
import { Header } from './components/index';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const PAGES = {
    login: <Login />,
    map: <Map />,
    profile: <Profile />,
    registration: <Registration />
  };
  const navigateTo = page => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header navigateTo={navigateTo} />
      <main>
        <section>{PAGES[currentPage]}</section>
      </main>
    </div>
  );
};

export default App;
