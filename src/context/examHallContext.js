import { createContext, useContext } from "react";

export const ExamHallContext = createContext({});
export const ExamHallProvider = ({ value, children }) => {
  return (
    <ExamHallContext.Provider value={value}>
      {children}
    </ExamHallContext.Provider>
  );
};
export const useExamHall = () => useContext(ExamHallContext);
