//conext creation
//provider
//consumer lenghty remove = useContext Hook
//useContext hook

import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"this is context api"}>
      {children}
    </AppContext.Provider>
  );
};

const useGolbalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGolbalContext };
