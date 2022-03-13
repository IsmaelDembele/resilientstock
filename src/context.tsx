import React, { createContext, useState } from "react";

export type TContext = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const pageContext = createContext<TContext | null>(null);

const PageContextProvider: React.FC = ({ children }) => {
  const [page, setPage] = useState(1);

  return <pageContext.Provider value={{ page, setPage }}>{children}</pageContext.Provider>;
};

export { pageContext, PageContextProvider };
