import React from "react";
import { Group, Button, TextInput } from "@mantine/core";


import Select from "../../../UI/Selector/Select";
import DatePickerWithLabel from "../../../UI/DatePickerRange/DatePickerWithLabel";


export default function AddMemberForm() {
  return (
    <form>
      <TextInput label="Userid" placeholder="ใส่เลข (ดูได้จากลิงก์หน้าโปรไฟล์)" />
      <DatePickerWithLabel label="กำหนดวันเริ่ม - วันหมดอายุ membership" placeholder="กำหนดวันเริ่ม - วันหมดอายุ"></DatePickerWithLabel>
      <Select className="mt-1" label="เลือกแพ็คเกจ"placeholder="เลือกแพ็คเกจ" data={[]}></Select>
    </form>
  );
}
