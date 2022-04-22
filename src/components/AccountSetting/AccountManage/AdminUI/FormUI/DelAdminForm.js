import { Text } from "@mantine/core";
import React from "react";

export default function DelAdminForm() {
  return (
    <form>
        <div>ลบบัญชีนี้ ออกจากการเป็น Membership ?</div>
        <Text className="mt-4">อีเมล : abc@gmail.com</Text>
        <Text className="mt-4">ตำแหน่ง : texttexttext</Text>
    </form>
  );
}
