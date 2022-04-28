import React, { useState } from "react";
import { Input, Paper, Popover, Group, Button } from "@mantine/core";

import { ReactComponent as PlusCircle } from "../../assets/icon/add.svg";
import TagFormList from "../UI/DemoUI/TagFormList";

export default function TagAdd() {
  const [opened, setOpened] = useState(false);
  return (
    <Group>
      <Popover
        opened={opened}
        classNames={{ header: "mb-0 border-b-0" }}
        onClose={() => setOpened(false)}
        position="bottom"
        placement="center"
        transition="pop-top-right"
        target={
          <Button
            classNames={{
              root: "z-40 border rounded-full bg-transparent  hover:bg-transparent border-black text-black",
              label: "",
              icon: "mr-0",
            }}
            styles={{
              leftIcon: {
                marginRight: 15,
              },
            }}
            onClick={() => setOpened((o) => !o)}
            leftIcon={<PlusCircle />}
          ></Button>
        }
      >
        <Paper>
          <div style={{ display: "flex content-start" }}>
            <Input icon={<PlusCircle />} placeholder="Search..."></Input>
          </div>
          <div>Select option or create one</div>
          <div className="mt-2">
            <TagFormList></TagFormList>
          </div>
        </Paper>
      </Popover>
    </Group>
  );
}
