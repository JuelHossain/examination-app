import { useEffect, useState } from "react";
import useUserExams from "./useUserExams";
const useResult = (id) => {
  const [loading, setLoading] = useState(true);
  const [userExams] = useUserExams();
  // setting result if found exam already
  const [result, setResult] = useState();
  useEffect(() => {
    if (userExams) {
      const match = userExams.find((exam) => exam._id === id);
      setResult(match);
      setLoading(false);
    }
  }, [userExams, id]);

  return [result, loading];
};

export default useResult;
