import { faker } from "@faker-js/faker";
import { ActionIcon, Tooltip } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { IconListCheck } from "@tabler/icons";
import { getRandomNumber } from "../../../../utils/random";
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
        answer: options[getRandomNumber(0, options.length - 1)],
        key: randomId(),
      })),
    };
    setValues(value);
  };
  return (
    <Tooltip
      classNames={{
        tooltip: "bg-main-500",
      }}
      label="Fill The Form With Random Data"
      withArrow
      position="left"
    >
      <ActionIcon variant="filled" onClick={fillForm} className="bg-main-500">
        <IconListCheck />
      </ActionIcon>
    </Tooltip>
  );
};

export default FillForm;
