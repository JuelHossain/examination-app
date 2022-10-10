import { useEffect, useState } from "react";
import useUserExams from "../../../../hooks/useUserExams";

const useResultData = () => {
  const [loading, setLoading] = useState(true);
  const [exams] = useUserExams();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (exams) {
      const data = exams.map((exam) => {
        const { title, questions, mark } = exam;
        const progress = (mark / questions.length) * 100;
        return {
          label: title,
          stats: `${mark}/${questions.length}`,
          progress,
          color: progress > 70 ? "green" : "red",
          icon: progress > 70 ? "up" : "down",
          id: exam._id,
        };
      });
      setData(data);
      setLoading(false);
    }
  }, [exams]);
  return [data, loading];
};

export default useResultData;
