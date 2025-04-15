import { createContext, useContext, useState } from "react";

const UtilityContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // or use token instead

  const login = (userData) => {
    setUser(userData);
    // optionally store token in localStorage/sessionStorage
  };

  const logout = () => {
    setUser(null);
    // remove token from storage if used
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(UtilityContext);
