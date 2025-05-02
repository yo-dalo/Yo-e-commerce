import { createContext, useContext, useState } from "react";

const UtilityContext = createContext();

export const UtilityProvider = ({ children }) => {
  const [user, setUser] = useState(5); // or use token instead

  const login = (userData) => {
    setUser(userData);
    // optionally store token in localStorage/sessionStorage
  };

  const logout = () => {
    setUser(null);
    // remove token from storage if used
  };

  return (
    <UtilityContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </UtilityContext.Provider>
  );
};

export const useUtility = () => useContext(UtilityContext);
