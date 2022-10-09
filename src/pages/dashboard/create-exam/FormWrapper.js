import { Paper } from "@mantine/core";

const classes = {
  root: "flex-1 flex flex-col gap-3  border dark:border-gray-700 border-gray-200 shadow-sm p-3 rounded-md basis-60 relative",
  title:
    "text-center font-semibold text-lg bg-main-100 py-1 text-main-500 dark:bg-main-900 dark:text-main-200 shadow-sm border dark:border-gray-700 border-gray-200 rounded-md",
};

const FormWrapper = ({ children, title }) => {
  return (
    <Paper withBorder className={classes.root}>
      <p className={classes.title}>{title}</p>
      {children}
    </Paper>
  );
};

export default FormWrapper;
