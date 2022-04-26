import { Menu, Button } from "@mantine/core";
import { Fragment } from "react";
import { ReactComponent as Chevrondown } from "../../../assets/icon/caretdown.svg";

export default function Demo() {
  return (
    <Fragment>
      <Menu
        classNames={{
          body: "z-10 w-80 absolute transform w-screen max-w-md sm:px-0 lg:ml-3",
        }}
        control={
          <Button
            rightIcon={<Chevrondown />}
            classNames={{
              root: "z-40 bg-transparent hover:bg-transparent py-2 px-4 text-xl text-black rounded border border-blue focus:outline-none focus:border-none",
              label: "py-20",
            }}
          >
            Workshop
          </Button>
        }
      >
        {/* Menu items */}
        <Menu.Item>Settings</Menu.Item>
      </Menu>
    </Fragment>
  );
}
