import React, { useState, useContext } from 'react';
import { Map, Registration } from './pages/index';
import { Header } from './components/index';
import { LoginWithAuth } from './pages/Login';
import { ProfilewithAuth } from './pages/Profile';
import { AuthContext } from './auth/AuthContext';
import './App.css';

const App = () => {
  const context = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState('login');

  const PAGES = {
    login: props => <LoginWithAuth {...props} />,
    map: props => <Map {...props} />,
    profile: props => <ProfilewithAuth {...props} />,
    registration: props => <Registration {...props} />
  };
  const navigateTo = page => {
    if (context.isLoggedIn) {
      setCurrentPage(page);
    } else {
      setCurrentPage('login');
    }
  };
  return (
    <div className="App">
      <Header navigateTo={navigateTo} />
      <main>
        <section>{PAGES[currentPage]({ navigate: navigateTo })}</section>
      </main>
    </div>
  );
};

export default App;
