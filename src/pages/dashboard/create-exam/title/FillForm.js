import { faker } from "@faker-js/faker";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconListCheck } from "@tabler/icons";
const options = ["A", "B", "C", "D"];

const FillForm = ({ form }) => {
  const { setValues, values } = form;

  const fillForm = () => {
    const value = {
      title: `${faker.lorem.sentence(2)} Exam`,
      description: faker.lorem.sentences(2),
      questions: values.questions.map((question) => ({
        question: faker.lorem.sentence(5),
        options: {
          A: faker.lorem.sentence(2),
          B: faker.lorem.sentence(2),
          C: faker.lorem.sentence(2),
          D: faker.lorem.sentence(2),
        },
        answer: options[faker.datatype.number(3)],
        key: faker.datatype.uuid(),
      })),
    };
    setValues(value);
  };
  return (
    <Tooltip
      classNames={{
        tooltip: "bg-main-500 dark:bg-main-900 dark:text-main-200",
      }}
      label="Fill The Form With Random Data"
      withArrow
      position="left"
    >
      <ActionIcon variant="filled" onClick={fillForm} className="bg-main-500 dark:bg-main-900 dark:text-main-200">
        <IconListCheck />
      </ActionIcon>
    </Tooltip>
  );
};

export default FillForm;
