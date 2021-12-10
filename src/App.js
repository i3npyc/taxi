import React, { useState } from 'react';
import { Map, Registration } from './pages/index';
import { Header } from './components/index';
import { LoginWithAuth } from './pages/Login';
import { ProfilewithAuth } from './pages/Profile';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const [currentPage, setCurrentPage] = useState('login');

  const PAGES = {
    login: props => <LoginWithAuth {...props} />,
    map: props => <Map {...props} />,
    profile: props => <ProfilewithAuth {...props} />,
    registration: props => <Registration {...props} />
  };
  const navigateTo = page => {
    if (isLoggedIn) {
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
