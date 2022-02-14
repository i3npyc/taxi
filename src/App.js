import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { PrivateRoute, Header } from './components/index';

import { MapContainer } from './pages/Map/Map';
import { LoginWithAuth } from './pages/Login/Login';
import { ProfilewithAuth } from './pages/Profile/Profile';
import { RegistrationWithAuth } from './pages/Registration/Registration';

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
                  <MapContainer />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfilewithAuth />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/registration"
              element={<RegistrationWithAuth />}
            />
            <Route exact path="*" element={<Navigate to="/login" />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
