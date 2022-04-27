import React from "react";
import { Box } from "@mantine/core";
import { createTable } from "@tanstack/react-table";

import { ReactComponent as Trash } from "../../assets/icon/trash.svg";
import { ReactComponent as Pencil } from "../../assets/icon/pencil.svg";

import DialogCard from "../UI/Card/DaialogCard";
import AddCuponForm from "./CuponForm/AddCuponForm";
import DelCuponForm from "./CuponForm/DelCuponForm";
import Table from "../AccountSetting/AccountManage/Table";
export default function CuponSetting() {

  const elements = [
    {
      id: 1,
      expDate: "01/01/22 | 13:13 ",
      cuponCode: "รหัสคูปอง",
      disCountPercent: "100%",
      disCountPrice: "-",
      cuponAmount: "100",

    },
    {
      id: 2,
      expDate: "01/01/22 | 13:13 ",
      cuponCode: "รหัสคูปอง",
      disCountPercent: "-",
      disCountPrice: "100",
      cuponAmount: "0/20",
    },
    {
      id: 3,
      expDate: "01/01/22 | 13:13 ",
      cuponCode: "รหัสคูปอง",
      disCountPercent: "100%",
      disCountPrice: "-",
      cuponAmount: "0/40",
    },
    {
      id: 4,
      expDate: "01/01/22 | 13:13 ",
      cuponCode: "รหัสคูปอง",
      disCountPercent: "-",
      disCountPrice: "100",
      cuponAmount: "0/20",
    },
  ];

  const table = createTable().setRowType();
  const defaultColumns = table.createColumns([
    table.createDataColumn((row) => row.expDate, {
      id: "expDate",
      cell: (info) => info.value,
      header: () => <span>หมดอายุ</span>,
    }),
    table.createDataColumn((row) => row.cuponCode, {
      id: "cuponCode",
      cell: (info) => info.value,
      header: () => <span>คูปอง</span>,
    }),
    table.createDataColumn((row) => row.disCountPercent, {
      id: "disCountPercent",
      cell: (info) => info.value,
      header: () => <span>ส่วนลด (%)</span>,
    }),
    table.createDataColumn((row) => row.disCountPrice, {
      id: "disCountPrice",
      cell: (info) => info.value,
      header: () => <span>ส่วนลด (บาท)</span>,
    }),
    table.createDataColumn((row) => row.cuponAmount, {
      id: "cuponAmount",
      cell: (info) => info.value,
      header: () => <span>จำนวนคูปอง</span>,
    }),
    table.createDataColumn((row) => row.id, {
      id: "id",
      cell: (info) => (
        <div className="flex justify-end space-x-2">
          <DialogCard
            buttonIcon={<Pencil />}
            modalTitile="แก้ไขคูปอง"
          >
            <AddCuponForm value={info.value}></AddCuponForm>
          </DialogCard>
          <DialogCard
            buttonIcon={<Trash />}
            modalTitile="ลบคูปอง"
          >
            <DelCuponForm value={info.value}></DelCuponForm>
          </DialogCard>
        </div>
      ),
      header: () => <span></span>,
    }),
  ]);
  
  return (
    <>
      <div className="text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        ตั้งค่าคูปอง
      </div>
      <div className="mt-8 ">
        <DialogCard buttonTitle="+ เพิ่มคูปอง" modalTitile="เพิ่มคูปอง">
          <AddCuponForm></AddCuponForm>
        </DialogCard>
      </div>
      <Box className="mt-8">
        <Table elements={elements} defaultColumns={defaultColumns} />
      </Box>
    </>
  );
}
