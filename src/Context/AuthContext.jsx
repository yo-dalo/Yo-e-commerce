import { createContext, useContext, useState } from "react";
import Yo from "../Part/Utility/Axios"
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // or use token instead

  const login = async (userData) => {
   const res =  await Yo.get("/api/users")
   console.log(res);
   // setUser(res);
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

export const useAuth = () => useContext(AuthContext);
