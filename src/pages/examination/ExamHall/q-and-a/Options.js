import { Chip } from "@mantine/core";
import { useExamHall } from "../../../../context/examHallContext";
import useChipOption from "./useChipOption";

export default function Options(props) {
  const { index } = props;
  const { form: { setFieldValue, values: { result, questions } = {} } = {} } =
    useExamHall();

  const changeHandler = (value) => {
    if (!result) {
      setFieldValue(`questions.${index}.answered`, value);
    }
  };

  const chipOption = useChipOption(props);

  const optionWrapperProps = {
    multiple: false,
    onChange: changeHandler,
    value: questions[index].answered,
    className:
      "grid sm:grid-cols-2 justify-items-center w-full items-center justify-center   ",
  };

  return <Chip.Group {...optionWrapperProps}>{chipOption}</Chip.Group>;
}
