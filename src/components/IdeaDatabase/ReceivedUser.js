import React, { useState } from "react";
import { Input, Paper, Popover, Group, Button, Text } from "@mantine/core";

import { ReactComponent as Search } from "../../assets/icon/SearchNoBg.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/userIcon.svg";

export default function AdminTagSearch({ userdata }) {
  const [opened, setOpened] = useState(false);
  return (
    <Group>
      <Popover
        opened={opened}
        classNames={{ header: "mb-0 border-b-0" }}
        onClose={() => setOpened(false)}
        position="bottom"
        placement="center"
        title="Received (user)"
        transition="pop-top-right"
        target={
          <Button
            className=" bg-transparent text-blue-800 hover:bg-transparent p-2 inline-flex items-center justify-center underline"
            onClick={() => setOpened((o) => !o)}
          >
            {userdata}
          </Button>
        }
      >
        <Paper>
          <div style={{ display: "flex content-start" }}>
            <Input icon={<Search />} placeholder="Search"></Input>
          </div>
          <div className="mt-5">
            <div className="px-4 sm:px-0 flex">
              <UserIcon />
              <Text className="self-center">Username</Text>
            </div>
          </div>
        </Paper>
      </Popover>
    </Group>
  );
}
