import {
  IconFileSpreadsheet,
  IconManualGearbox,
  IconUserPlus,
} from "@tabler/icons";

export const adminNav = [
  {
    name: "Create Exam",
    index: true,
    link: "create-exam",
    icon: IconFileSpreadsheet,
  },
  { name: "manage Exam", link: "manage-exam", icon: IconManualGearbox },
  { name: "users", link: "users", icon: IconUserPlus },
];
export const userNav = [
  {
    name: "Exam Result",
    index: true,
    link: "exam-result",
    icon: IconFileSpreadsheet,
  },
];
