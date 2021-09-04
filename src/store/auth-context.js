import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, //dummy for auto-complete suggestion practices
  onLogin: (email, password) => {} //dummy
});

export default AuthContext;