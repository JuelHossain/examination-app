import { createContext, useContext } from "react";

export const ExamCardContext = createContext({});
export const ExamCardProvider = ({ value, children }) => (
  <ExamCardContext.Provider value={value}>{children}</ExamCardContext.Provider>
);
export const useExamCard = () => useContext(ExamCardContext);
