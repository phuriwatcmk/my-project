import React from "react";
import { Group, Button, TextInput } from "@mantine/core";
import Select from "../../../../UI/Selector/Select";

export default function AddAdminForm() {
  return (
    <form>
      <TextInput label="อีเมล" placeholder="กรอกอีเมล" />
      <TextInput label="รหัสผ่าน" placeholder="กรอกรหัสผ่าน" />
      <TextInput label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่าน" />
      <Select className="mt-1" label="ตำแหน่ง"placeholder="ตำแหน่ง" data={[]}></Select>
    </form>
  );
}
