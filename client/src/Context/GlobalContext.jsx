import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [Cookie, setCookie] = useState(null);
  
    return (
      <GlobalContext.Provider
        value={{
          Cookie,
          setCookie,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };

export const useGlobalContext = () => {
    return useContext(GlobalContext);
  };