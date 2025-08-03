import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );

  const login = async (data) => {
    const res = await axios.post(`http://192.168.1.11:5555/api/login`, data);
    setCurrentUser(res.data.others);
    return res;
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setCurrentUser(null);
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
