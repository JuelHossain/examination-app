import {
  ActionIcon,
  Center,
  Group,
  Paper,
  RingProgress,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconStepOut,
} from "@tabler/icons";
import ExamHallModal from "../../examination/ExamHall/ExamHallModal";

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const StatList = ({ stat }) => {
  const Icon = icons[stat.icon];
  const [opened, handler] = useDisclosure();
  return (
    <>
      <Paper
        className="relative"
        onClick={handler.toggle}
        withBorder
        radius="md"
        p="xs"
        key={stat.label}
      >
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon size={22} stroke={1.5} />
              </Center>
            }
          />

          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
              {stat.label}
            </Text>
            <Text weight={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
        <ActionIcon
          size={"sm"}
          onClick={handler.toggle}
          className="absolute bottom-4 right-4"
        >
          <IconStepOut />
        </ActionIcon>
      </Paper>
      <ExamHallModal id={stat?.id} opened={opened} handler={handler} />
    </>
  );
};

export default StatList;
