import { useState } from "react";
import { Modal, Group, Button, TextInput, Text } from "@mantine/core";

export default function DialogCard({
  modalTitile,
  buttonTitle,
  children,
  buttonIcon,
  buttonType,
  buttonType2,
}) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        classNames={{
          title:
            "text-base font-semibold text-black-900 lg:text-xl dark:text-black",
          header:
            "relative flex justify-center content-center text-center text-black dark:border-gray-600",
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

        <Group position="right" mt="xl">
          <Button
            classNames={{
              root: "z-40 border rounded-full bg-transparent  hover:bg-transparent border-black text-black",
              label: "",
            }}
            type="button"
          >
            ยกเลิก
          </Button>
          <Button
            classNames={{
              root: "z-40 border rounded-full bg-primary  hover:bg-primary text-black",
              label: "",
            }}
            type="button"
          >
            ยืนยัน
          </Button>
        </Group>
      </Modal>

      <Group position="start">
        <Button
          classNames={{
            root: "z-40 bg-primary hover:bg-primary rounded-full text-black",
            label: "",
            icon: "mr-0",
          }}
          styles={{
            leftIcon: {
              marginRight: 15,
            },
          }}
          leftIcon={buttonIcon}
          onClick={() => setOpened((o) => !o)}
        >
          {buttonTitle}
        </Button>
      </Group>
    </>
  );
}
