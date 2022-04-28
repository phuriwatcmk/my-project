import React from "react";
import { TextInput } from "@mantine/core";

import Select from "../../UI/Selector/Select";
import DatePicker from "../../../components/UI/DatePickerRange/DatePicker";

export default function AddCuponForm() {
  return (
    <form>
      <TextInput label="รหัสคูปอง" placeholder="ใส่รหัส coupon" />
      <Select
        className="mt-1"
        label="เลือกวิธีลดราคา"
        placeholder="เลือกวิธีลดราคา"
        data={["ส่วนลด (%)", "ส่วนลด (บาท)"]}
      ></Select>
      <TextInput className="mt-1" label="" placeholder="ใส่เลข" />
      <DatePicker
        label="กำหนดวันหมดอายุ"
        placeholder="กำหนดวันเวลาหมดอายุ"
      ></DatePicker>
      <TextInput
        className="mt-1"
        label="จำนวนคูปองที่แจก"
        placeholder="ใส่เลข"
      />
    </form>
  );
}
