import React, {useContext, createContext} from "react";
import { createNewsStore } from "./store";
import { useLocalStore } from 'mobx-react'

const NewsContext = createContext(null)

export const NewsProvider = ({ children }) => {
  const newsStore = useLocalStore(createNewsStore);
  return (
    <NewsContext.Provider value={newsStore}>{children}</NewsContext.Provider>
  );
};


export const useNewsStore = () => useContext(NewsContext);
