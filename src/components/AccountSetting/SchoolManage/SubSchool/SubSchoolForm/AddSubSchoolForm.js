import React from "react";
import { Group, Button, TextInput } from "@mantine/core";


import Select from "../../../../UI/Selector/Select";


export default function AddSchoolForm() {
  return (
    <form>
      <TextInput label="Userid" placeholder="ใส่เลข (ดูได้จากลิงก์หน้าโปรไฟล์)" />
      <Select className="mt-1" label="ตำแหน่ง"placeholder="เลือกตำแหน่ง" data={[]}></Select>
    </form>
  );
}
