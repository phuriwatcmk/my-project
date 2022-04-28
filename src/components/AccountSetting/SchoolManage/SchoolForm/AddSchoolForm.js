import React from "react";
import { TextInput } from "@mantine/core";

import Select from "../../../UI/Selector/Select";
import DatePickerWithLabel from "../../../UI/DatePickerRange/DatePickerWithLabel";

export default function AddSchoolForm({ value }) {
  return (
    <form>
      <h1>{value}</h1>
      <TextInput
        label="ตั้งชื่อกลุ่มโรงเรียน"
        placeholder="ใส่ชื่อกลุ่มโรงเรียน"
      />
      <DatePickerWithLabel
        label="กำหนดวันเริ่ม - วันหมดอายุ membership"
        placeholder="กำหนดวันเริ่ม - วันหมดอายุ"
      ></DatePickerWithLabel>
      <Select
        className="mt-1"
        label="เลือกคูปอง"
        placeholder="เลือกคูปอง"
        data={[]}
      ></Select>
      <Select
        className="mt-1"
        label="เลือกสังกัด"
        placeholder="เลือกสังกัด"
        data={[]}
      ></Select>
      <Select
        className="mt-1"
        label="เลือกจังหวัดของกลุ่มโรงเรียน"
        placeholder="เลือกจังหวัด"
        data={[]}
      ></Select>
    </form>
  );
}
