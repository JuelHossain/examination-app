import { useSelector } from "react-redux";
import { useGetUserQuery } from "../features/auth/authApi";
import { selectUser } from "../features/auth/authSelector";

const useUserExams = () => {
  // getting user exams
  const { _id: userId } = useSelector(selectUser);
  const { data: { exams: userExams } = {}, isLoading } =
    useGetUserQuery(userId);
  return [userExams, isLoading];
};

export default useUserExams;
