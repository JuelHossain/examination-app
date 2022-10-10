import { useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../../features/auth/authApi";
import { selectUser } from "../../../features/auth/authSelector";
import useUserExams from "../../../hooks/useUserExams";
import getMark from "../../../utils/getMark";
import { useExamHall } from "../context/examHallContext";

const useSubmitAnswers = () => {
  const { _id: id } = useSelector(selectUser);
  const { form, stepperFn } = useExamHall();
  const [userExams] = useUserExams();

  const { values } = form ?? {};
  const { questions } = values ?? {};

  const { toggleConfirm, goToNextStep } = stepperFn ?? {};
  const [updateUser] = useUpdateUserMutation();
  const submitAnswer = () => {
    const mark = getMark(questions);
    const answers = {
      id,
      patch: {
        exams: [...userExams, { ...values, mark }],
      },
    };
    updateUser(answers);
    toggleConfirm();
    goToNextStep();
  };
  return submitAnswer;
};

export default useSubmitAnswers;
