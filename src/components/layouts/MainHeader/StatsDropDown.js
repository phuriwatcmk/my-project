import { Menu, Divider, Text, Button } from "@mantine/core";
import { Fragment } from "react";

export default function StatsDropDown() {
  return (
    <Fragment>
      <Menu
        classNames={{ body: "w-80 z-10 w-80 absolute transform w-screen max-w-md sm:px-0 lg:ml-3" }}
        control={
          <Button
            classNames={{
              root: "z-40 bg-transparent hover:bg-transparent py-2 px-4 text-xl text-black rounded border border-blue focus:outline-none focus:border-none",
              label: "py-20",
            }}
          >
            Stats
          </Button>
        }
      >
        {/* Menu items */}
        <Menu.Label>Application</Menu.Label>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Messages</Menu.Item>
        <Menu.Item>Gallery</Menu.Item>
        <Menu.Item
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>
        <Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item>Transfer my data</Menu.Item>,
        <Menu.Item color="red">Delete my account</Menu.Item>
      </Menu>
    </Fragment>
  );
}
