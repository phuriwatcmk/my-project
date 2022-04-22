import { Text } from "@mantine/core";
import React from "react";

export default function DelSchoolForm() {
  return (
    <form>
      <Text className="mt-4">หากลบกลุ่มโรงเรียนนี้ บัญชีทั้งหมดในกลุ่มนี้</Text>
      <Text className="mt-4">จะถูกลบออกจากการเป็น Membership ด้วย</Text>
    </form>
  );
}
