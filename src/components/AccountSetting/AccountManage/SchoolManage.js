import React from "react";
import { Group, Button, Table } from "@mantine/core";

import { ReactComponent as Trash } from "../../../assets/icon/trash.svg";
import { ReactComponent as Pencil } from "../../../assets/icon/pencil.svg";

import DialogCard from "../../UI/Card/DaialogCard";
import SchoolUpload from "./SchoolUpload";
import Select from "../../UI/Selector/Select";
import DateRange from "../../UI/DatePickerRange/DatePickerRange";
import Search from "../../UI/Search/Search";
import DelSchoolForm from "../SchoolManage/SchoolForm/DelSchoolForm";
import AddSchoolForm from "../SchoolManage/SchoolForm/AddSchoolForm";

export default function Schoolmanage() {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  return (
    <div>
      {" "}
      <div className="text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        แพ็คเกจกลุ่มโรงเรียน
      </div>
      <div className="mt-8 inline-flex">
        <DialogCard
          buttonTitle="+ เพิ่มกลุ่มโรงเรียน"
          modalTitile="เพิ่มกลุ่มโรงเรียน"
        >
          <AddSchoolForm></AddSchoolForm>
        </DialogCard>

        <DialogCard buttonIcon={<Trash />} modalTitile="ลบกลุ่มโรงเรียน">
          <DelSchoolForm></DelSchoolForm>
        </DialogCard>

        <DialogCard buttonIcon={<Pencil />} modalTitile="แก้ไขกลุ่มโรงเรียน">
          <AddSchoolForm></AddSchoolForm>
        </DialogCard>

        <SchoolUpload></SchoolUpload>
      </div>
      <div className="mt-8">
        <div className="flex flex-row justify-between gap-8 pb-4">
          <div className="basis-1/4">
            <DateRange
              label=""
              placeholder="เลือกวันที่เริ่ม - หมดอายุ"
            ></DateRange>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <div className="basis-1/6">
            <Select placeholder="สังกัด" data={[]}></Select>
          </div>
          <div className="basis-1/6">
            <Select placeholder="จังหวัด" data={[]}></Select>
          </div>
          <div className="basis-1/6">
            <Select placeholder="สถานะ" data={[]}></Select>
          </div>
          <div className="basis-1/2">
            <Search placeholder="ค้นหาผ่านชื่อไอเดีย นามปากกาคนเขียน "></Search>
          </div>
          <div className="basis-1/3"></div>
        </div>
      </div>
      <div className="mt-8 mb-4 text-md">จำนวน 12,345 ไอเดีย</div>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}
