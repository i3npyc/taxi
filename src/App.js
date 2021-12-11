import React from 'react';
import { Map, Registration } from './pages/index';
import { Header } from './components/index';
import { LoginWithAuth } from './pages/Login';
import { ProfilewithAuth } from './pages/Profile';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Routes>
            <Route path="/login" element={<LoginWithAuth />} />
            <Route path="/" element={<Map />} />
            <Route path="/profile" element={<ProfilewithAuth />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
