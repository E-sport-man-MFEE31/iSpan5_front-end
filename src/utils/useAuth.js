import React, {
  useState,
  useContext,
  createContext,
} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(window.localStorage.getItem("user") !== null ? JSON.parse(window.localStorage.getItem("user")) : {
    token: "",
    member: "",
  });

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
