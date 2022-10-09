import { Checkbox, SimpleGrid, TextInput } from "@mantine/core";

export default function Options({ index, options, form }) {
  const {
    values: { questions } = {},
    getInputProps,
    setFieldValue,
  } = form ?? {};

  const optionList = Object.keys(options).map((option) => {
    const checkHandler = (e) => {
      const checked = e.target.checked;
      if (checked) {
        setFieldValue(`questions.${index}.answer`, option);
      }
    };

    const checkBoxProps = {
      classNames: {
        input:
          "checked:bg-main-500 dark:checked:bg-main-900 checked:border-main-500 dark:checked:border-main-900",
         icon: "text-main-50 dark:text-main-200",
      },
      checked: option === questions[index].answer,
      onChange: checkHandler,
    };

    const optionProps = {
      ...getInputProps(`questions.${index}.options.${option}`),
      rightSection: <Checkbox {...checkBoxProps} />,
      required: true,
      key: option,
      placeholder: `Option ${option}`,
    };

    return <TextInput {...optionProps} />;
  });

  return (
    <SimpleGrid cols={2} spacing={10}>
      {optionList}
    </SimpleGrid>
  );
}
