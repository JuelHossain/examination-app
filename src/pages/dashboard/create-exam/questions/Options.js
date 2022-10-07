import { Checkbox, SimpleGrid, TextInput } from "@mantine/core";
import { useFormContext } from "../form-context";

export default function Options({ index, options }) {
  const { values, getInputProps, setFieldValue } = useFormContext();
  return (
    <SimpleGrid cols={2} spacing={10}>
      {Object.keys(options).map((option) => {
        return (
          <TextInput
            {...getInputProps(`questions.${index}.options.${option}`)}
            rightSection={
              <Checkbox
                classNames={{
                  input: "checked:bg-main-500 checked:border-main-500",
                }}
                checked={option === values.questions[index].answer}
                onChange={(e) => {
                  const checked = e.target.checked;

                  if (checked) {
                    setFieldValue(`questions.${index}.answer`, option);
                  }
                }}
              />
            }
            required
            key={option}
            placeholder={`Option ${option}`}
          />
        );
      })}
    </SimpleGrid>
  );
}
