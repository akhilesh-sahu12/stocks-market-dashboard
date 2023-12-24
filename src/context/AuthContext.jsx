import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State to track user authentication status
  const [authenticated, setAuthenticated] = useState(false);

  // Function to log in the user
  const userLogin = () => {
    setAuthenticated(true);
    console.log('User is logged successfully'); // Log a message for debugging
  };

  // Function to log out the user
  const logout = () => {
    setAuthenticated(false);
    console.log('User is logged out.'); // Log a message for debugging
  };

  // Provide authentication state and functions to children components
  return (
    <AuthContext.Provider value={{ authenticated, userLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
