import { useState } from "react";
import { Modal, Group, Button, TextInput, Text } from "@mantine/core";

export default function DialogCard({
  modalTitile,
  buttonTitle,
  children,
  buttonType,
  buttonType2,
}) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        classNames={{
          title:
            "text-base font-semibold text-gray-900 lg:text-xl dark:text-white",
          header:
            "relative flex justify-center content-center text-center dark:border-gray-600",
          close: "absolute inset-y-0 right-0 mt-1",
        }}
        closeButtonLabel="Close authentication modal"
        opened={opened}
        onClose={() => setOpened(false)}
        title={modalTitile}
        radius="md"
      >
        {/* Modal content */}
        {children}
      </Modal>

      <Group position="start">
        <Button
          classNames={{
            root: "z-40 border rounded-full bg-transparent  hover:bg-transparent border-black text-black border-blue",
            label: "",
          }}
          onClick={() => setOpened((o) => !o)}
        >
          {buttonTitle}
        </Button>
      </Group>
    </>
  );
}
