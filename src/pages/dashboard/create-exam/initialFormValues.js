import { randomId } from "@mantine/hooks";
import { getRandomNumber } from "../../../utils/random";
const options = ["A", "B", "C", "D"];
export const initialFormValues = {
  initialValues: {
    title: "",
    description: "",
    questions: [
      {
        question: "",
        options: {
          A: "",
          B: "",
          C: "",
          D: "",
        },
        answer: options[getRandomNumber(0, options.length - 1)],
        key: randomId(),
      },
      {
        question: "",
        options: {
          A: "",
          B: "",
          C: "",
          D: "",
        },
        answer: options[getRandomNumber(0, options.length - 1)],
        key: randomId(),
      },
    ],
  },
};
