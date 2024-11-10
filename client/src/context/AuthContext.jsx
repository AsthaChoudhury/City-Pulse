import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [newPost, setNewPost] = useState(null);

  const addNewPost = (post) => {
    setNewPost(post); 
  };

  const updateUser = (data) => {
    setCurrentUser(data);
    localStorage.setItem("user", JSON.stringify(data)); 
  };
  

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser ,addNewPost}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
