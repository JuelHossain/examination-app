import { LoadingOverlay, SimpleGrid } from "@mantine/core";
import useResultData from "./hooks/useResultData";
import StatList from "./StateList";

export default function StatsRing() {
  const [data, dataLoading] = useResultData();
  const stats = data.map((stat) => {
    return <StatList key={stat.id} stat={stat} />;
  });
  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      <LoadingOverlay visible={dataLoading} />
      {stats}
    </SimpleGrid>
  );
}
