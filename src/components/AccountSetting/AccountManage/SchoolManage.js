import React from "react";

import { Box } from "@mantine/core";
import { ReactComponent as Trash } from "../../../assets/icon/trash.svg";
import { ReactComponent as Pencil } from "../../../assets/icon/pencil.svg";
import { createTable } from "@tanstack/react-table";

import DialogCard from "../../UI/Card/DaialogCard";
import SchoolUpload from "./SchoolUpload";
import Select from "../../UI/Selector/Select";
import DateRange from "../../UI/DatePickerRange/DatePickerRange";
import Search from "../../UI/Search/Search";
import DelSchoolForm from "../SchoolManage/SchoolForm/DelSchoolForm";
import AddSchoolForm from "../SchoolManage/SchoolForm/AddSchoolForm";
import Table from "../../UI/Table/Table";

export default function Schoolmanage() {
  const elements = [
    {
      id: 1,
      startDate: "01/01/22",
      endDate: "01/01/22",
      schoolGroup: "www.google.com",
      dashBoard: "www.google.com",
      beLongsTo: "สังกัด",
      provinces: "จังหวัด",
      cupons: "รหัสคูปอง",
      status: "membership",
    },
    {
      id: 2,
      startDate: "01/01/22",
      endDate: "01/01/22",
      schoolGroup: "www.google.com",
      dashBoard: "www.google.com",
      beLongsTo: "สังกัด",
      provinces: "จังหวัด",
      cupons: "รหัสคูปอง",
      status: "membership",
    },
    {
      id: 3,
      startDate: "01/01/22",
      endDate: "01/01/22",
      schoolGroup: "www.google.com",
      dashBoard: "www.google.com",
      beLongsTo: "สังกัด",
      provinces: "จังหวัด",
      cupons: "รหัสคูปอง",
      status: "membership",
    },
    {
      id: 4,
      startDate: "01/01/22",
      endDate: "01/01/22",
      schoolGroup: "www.google.com",
      dashBoard: "www.google.com",
      beLongsTo: "สังกัด",
      provinces: "จังหวัด",
      cupons: "รหัสคูปอง",
      status: "membership",
    },
  ];
  const table = createTable().setRowType();

  const defaultColumns = table.createColumns([
    table.createDataColumn((row) => row.startDate, {
      id: "startDate",
      cell: (info) => info.value,
      header: () => <span>เริ่ม</span>,
    }),
    table.createDataColumn((row) => row.endDate, {
      id: "endDate",
      cell: (info) => info.value,
      header: () => <span>หมดอายุ</span>,
    }),
    table.createDataColumn((row) => row.schoolGroup, {
      id: "schoolGroup",
      cell: (info) => info.value,
      header: () => <span>กลุ่มโรงเรียน</span>,
    }),
    table.createDataColumn((row) => row.dashBoard, {
      id: "dashBoard",
      cell: (info) => info.value,
      header: () => <span>แดชบอร์ดโรงเรียน</span>,
    }),
    table.createDataColumn((row) => row.beLongsTo, {
      id: "beLongsTo",
      cell: (info) => info.value,
      header: () => <span>สังกัด</span>,
    }),
    table.createDataColumn((row) => row.provinces, {
      id: "provinces",
      cell: (info) => info.value,
      header: () => <span>จังหวัด</span>,
    }),
    table.createDataColumn((row) => row.cupons, {
      id: "cupons",
      cell: (info) => info.value,
      header: () => <span>คูปอง</span>,
    }),
    table.createDataColumn((row) => row.status, {
      id: "status",
      cell: (info) => info.value,
      header: () => <span>สถานะ</span>,
    }),
    table.createDataColumn((row) => row.id, {
      id: "id",
      cell: (info) => (
        <div className="flex justify-end space-x-2">
          <DialogCard buttonIcon={<Pencil />} modalTitile="แก้ไขกลุ่มโรงเรียน">
            <AddSchoolForm></AddSchoolForm>
          </DialogCard>
          <DialogCard buttonIcon={<Trash />} modalTitile="ลบกลุ่มโรงเรียน">
            <DelSchoolForm></DelSchoolForm>
          </DialogCard>
        </div>
      ),
      header: () => <span></span>,
    }),
  ]);
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
      <div className="mt-8 mb-4 text-md">จำนวน {elements.length} ไอเดีย</div>
      <Box className="mt-8">
        <Table elements={elements} defaultColumns={defaultColumns} />
      </Box>
    </div>
  );
}
