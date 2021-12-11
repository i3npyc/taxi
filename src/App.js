import React from 'react';
import { Map, Registration } from './pages/index';
import { Header } from './components/index';
import { LoginWithAuth } from './pages/Login';
import { ProfilewithAuth } from './pages/Profile';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/Auth/PrivateRoute';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Routes>
            <Route exact path="/login" element={<LoginWithAuth />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Map />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/*"
              element={
                <PrivateRoute>
                  <ProfilewithAuth />
                </PrivateRoute>
              }
            />
            <Route exact path="/registration" element={<Registration />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
