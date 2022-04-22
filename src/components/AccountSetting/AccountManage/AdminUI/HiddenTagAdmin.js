import React, { useState } from "react";
import {
  Avatar,
  Input,
  Paper,
  Popover,
  Group,
  Button,
  Text,
} from "@mantine/core";

export default function AdminTagSearch() {
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
            className="bg-blue-500 rounded-full p-2 inline-flex items-center justify-center"
            onClick={() => setOpened((o) => !o)}
          >
            +
          </Button>
        }
      >
        <Paper>
          <div style={{ display: "flex content-start" }}>
            <Input
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
              placeholder="Search"
            ></Input>
          </div>
          <div className="mt-2">
            <div className="px-4 sm:px-0 flex inline-flex">
              <Avatar src="avatar.png" alt="it's me" />
              <Text className="self-center">Username</Text>
            </div>
          </div>
        </Paper>
      </Popover>
    </Group>
  );
}
