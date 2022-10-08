import { Chip } from "@mantine/core";

export default function Options({ options, index, form }) {
  const { getInputProps } = form;

  return (
    <Chip.Group
      multiple={false}
      {...getInputProps(`questions.${index}.answered`, { type: "radio" })}
      className="grid grid-cols-2 justify-items-center "
    >
      {Object.keys(options).map((option) => (
        <Chip
          key={option}
          size="lg"
          radius={"md"}
          color={"green"}
          variant="filled"
          classNames={{
            root: "w-full ",
            label: ` w-full`,
          }}
          value={option}
        >
          {options[option]}
        </Chip>
      ))}
    </Chip.Group>
  );
}
