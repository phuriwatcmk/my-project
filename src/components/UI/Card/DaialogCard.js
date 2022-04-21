import { useState } from "react";
import { Dialog, Group, Button, TextInput, Text } from "@mantine/core";

export default function DialogCard() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group>
        <Button
          classNames={{
            root: "z-40 border rounded-full bg-transparent  hover:bg-transparent border-black text-black border-blue",
            label: "py-20",
          }}
          onClick={() => setOpened((o) => !o)}
        >
          เพิ่มบัญชีผู้ดูแลระบบ
        </Button>
      </Group>

      <Dialog
        opened={opened}
        withCloseButton
        classNames={{root: ""}}
        onClose={() => setOpened(false)}
      >
        <Text size="sm" style={{}} weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="">
          <TextInput placeholder="hello@gluesticker.com" style={{}} />
          <Button onClick={() => setOpened(false)}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
