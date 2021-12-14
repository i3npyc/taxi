import React from 'react';
import { Header } from './components/index';
import { MapContainer } from './pages/Map';
import { LoginWithAuth } from './pages/Login';
import { ProfilewithAuth } from './pages/Profile';
import { RegistrationWithAuth } from './pages/Registration';
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
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
