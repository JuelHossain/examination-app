import { ActionIcon, Group, Title, Tooltip } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { IconListCheck, IconMinus, IconPlus } from "@tabler/icons";
import React from "react";
import { getRandomNumber } from "../../../../utils/random";
import AddQuestion from "./AddQuestion";
import FillForm from "./FillForm";
import RemoveQuestions from "./RemoveQuestions";

const CardTitle = ({ form, title }) => {
 



 
  return (
    <Group position="apart">
      <Title
        order={4}
        className="text-main-600 bg-main-100 py-1 px-2 rounded-md"
      >
        {title}
      </Title>
      <Group spacing={6}>
      <FillForm form={form}/>
      <RemoveQuestions form={form}/>
      <AddQuestion form={form}/>
       
      </Group>
    </Group>
  );
};

export default CardTitle;
