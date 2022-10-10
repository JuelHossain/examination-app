import { createContext, useContext } from "react";

export const QandAContext = createContext();
export const QandAProvider = ({ value, children }) => {
  return (
    <QandAContext.Provider value={value}>{children}</QandAContext.Provider>
  );
};
export const useQandA = () => useContext(QandAContext);
