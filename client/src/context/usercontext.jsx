// import React, { createContext, useContext, useState, useEffect } from "react";
// import { AuthContext } from "./AuthContext.jsx";

// const UserContext = createContext();

// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const { currentUser } = useContext(AuthContext);
//   const [savedItems, setSavedItems] = useState([]);

//   // Load saved items for the current user from local storage on login
//   useEffect(() => {
//     if (currentUser) {
//       const userSavedItems = JSON.parse(localStorage.getItem(`savedItems_${currentUser.id}`)) || [];
//       setSavedItems(userSavedItems);
//     }
//   }, [currentUser]);

//   // Save items for the current user to local storage
//   const saveItem = (item) => {
//     setSavedItems((prevItems) => {
//       if (!prevItems.some((savedItem) => savedItem.id === item.id)) {
//         const updatedItems = [...prevItems, item];
//         localStorage.setItem(`savedItems_${currentUser.id}`, JSON.stringify(updatedItems));
//         return updatedItems;
//       }
//       return prevItems;
//     });
//   };

//   // Clear saved items for the current user when they log out
//   const clearSavedItems = () => {
//     if (currentUser) {
//       localStorage.removeItem(`savedItems_${currentUser.id}`);
//       setSavedItems([]);
//     }
//   };

//   return (
//     <UserContext.Provider value={{ savedItems, saveItem, clearSavedItems }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;

import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext.jsx";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [savedItems, setSavedItems] = useState([]);


  useEffect(() => {
    if (currentUser ) {
      const userSavedItems = JSON.parse(localStorage.getItem(`savedItems_${currentUser.id}`)) || [];
      setSavedItems(userSavedItems);
    } else {

      setSavedItems([]);
    }
  }, [currentUser]);

  const saveItem = (item) => {
    if (!currentUser) return;  

    setSavedItems((prevItems) => {
      if (!prevItems.some((savedItem) => savedItem.id === item.id)) {
        const updatedItems = [...prevItems, item];
        console.log(currentUser._id)
        localStorage.setItem(`savedItems_${currentUser._id}`, JSON.stringify(updatedItems));
        return updatedItems;
      }
      return prevItems;
    });
  };

  const clearSavedItems = () => {
    setSavedItems([]);
  };

  return (
    <UserContext.Provider value={{ savedItems, saveItem, clearSavedItems }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
