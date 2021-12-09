import React, { useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (email, password) => {
    if (email !== 'email@example.com' || password !== 'password') {
      return;
    }
    setIsLoggedIn(true);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const withAuth = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {value => <WrappedComponent {...value} {...this.props} />}
        </AuthContext.Consumer>
      );
    }
  };
};
