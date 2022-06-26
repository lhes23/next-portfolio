import { useContext, createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children, userDetails }) => {
  return (
    <AppContext.Provider value={userDetails}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
