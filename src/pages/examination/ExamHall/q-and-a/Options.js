import { Chip } from "@mantine/core";

export default function Options({ options, index, form }) {
  const { setFieldValue, values: { result, questions } = {} } = form;

  return (
    <Chip.Group
      multiple={false}
      onChange={(value) => {
        if (!result) {
          setFieldValue(`questions.${index}.answered`, value);
        }
      }}
      value={questions[index].answered}
      className="grid sm:grid-cols-2 justify-items-center w-full items-center justify-center   "
    >
      {Object.keys(options).map((option) => {
        let color;
        if (result) {
          if (option === questions[index].answer) {
            color = "bg-green-200 dark:bg-green-800/50";
          } else if (option === questions[index].answered) {
            color = "bg-red-200 dark:bg-red-800/50";
          }
        }
        return (
          <Chip
            readOnly={result}
            key={option}
            size="lg"
            radius={"md"}
            color={"green"}
            variant="filled"
            classNames={{
              root: "w-full ",
              label: ` w-full ${color} `,
            }}
            value={option}
          >
            {options[option]}
          </Chip>
        );
      })}
    </Chip.Group>
  );
}
