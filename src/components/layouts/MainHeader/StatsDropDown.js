import { Menu, Divider, Text, Button } from "@mantine/core";
import { Fragment } from "react";
import { ReactComponent as Chevrondown } from "../../../assets/icon/caretdown.svg";

export default function StatsDropDown() {
  return (
    <Fragment>
      <Menu
        classNames={{ body: "w-40 z-10 absolute transform w-screen max-w-md sm:px-0 lg:ml-3" }}
        control={
          <Button
          rightIcon={<Chevrondown/>}
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
        <Menu.Item>Graph Stat</Menu.Item>
        <Menu.Item>Stat</Menu.Item>
      </Menu>
    </Fragment>
  );
}
