import { LoadingOverlay, Notification } from "@mantine/core";
import { useGetExamsQuery } from "../../features/exams/examApi";
import ExamCard from "./ExamCard/ExamCard";

const Examination = () => {
  const { data: exams, isLoading, isError } = useGetExamsQuery();

  let content;
  if (isLoading) {
    content = <LoadingOverlay visible={true} />;
  } else if (isError) {
    content = (
      <Notification
        className="max-w-xs"
        color={"red"}
        title="there Was some error"
      />
    );
  } else if (exams.length > 0) {
    content = exams.map((exam) => <ExamCard key={exam._id} id={exam._id} />);
  } else {
    content = (
      <Notification
        title=" No Exams Found"
        className="max-w-xs"
        color={"red"}
      ></Notification>
    );
  }
  return <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">{content}</div>;
};

export default Examination;
