import { useEffect, useState } from "react";
import Question from "./Question";

const Questions = ({ totalQ, setForm, form }) => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    let questions = [];
    for (let i = 1; i <= totalQ; i++) {
      questions.push(<Question key={i} i={i} setForm={setForm} />);
    }

    setQuestions(questions);
  }, [totalQ, setForm]);

  useEffect(() => {
    let questionsValue = {};
    questions.forEach((q) => {
      const key = `question${q.key}`;
      questionsValue = {
        ...questionsValue,
        [key]: {
          question: "",
          options: {
            A: "",
            B: "",
            C: "",
            D: "",
          },
          answer: "A",
        },
      };
    });
    setForm((form) => ({
      title: form.title,
      description: form.description,
      ...questionsValue,
    }));
  }, [questions, setForm]);

  return <>{questions}</>;
};

export default Questions;
