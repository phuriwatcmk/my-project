import React from "react";
import { Box } from "@mantine/core";
import { createTable } from "@tanstack/react-table";

import { ReactComponent as Trash } from "../../../assets/icon/trash.svg";
import { ReactComponent as Pencil } from "../../../assets/icon/pencil.svg";

import DialogCard from "../../UI/Card/DaialogCard";
import AddAdminForm from "./AdminUI/FormUI/AddAdminForm";
import DelAdminForm from "./AdminUI/FormUI/DelAdminForm";
import Table from "../../UI/Table/Table";

export default function AccountnManage() {
  const elements = [
    {
      id: 1,
      email: "abc@gmail.com",
      position: "SuperAdmin",
    },
    {
      id: 2,
      email: "abc@gmail.com",
      position: "SuperAdmin",
    },
    {
      id: 3,
      email: "abc@gmail.com",
      position: "SuperAdmin",
    },
    {
      id: 4,
      email: "abc@gmail.com",
      position: "SuperAdmin",
    },
  ];
  const table = createTable().setRowType();

  const defaultColumns = table.createColumns([
    table.createDataColumn((row) => row.email, {
      id: "email",
      cell: (info) => info.value,
      header: () => <span>Email</span>,
    }),
    table.createDataColumn((row) => row.position, {
      id: "position",
      cell: (info) => info.value,
      header: () => <span>ตำแหน่ง</span>,
    }),
    table.createDataColumn((row) => row.id, {
      id: "id",
      cell: (info) => (
          <div className="flex justify-end space-x-2">
            <DialogCard
              buttonIcon={<Pencil />}
              modalTitile="แก้ไขบัญชีผู้ดูแลระบบ"
            >
              <AddAdminForm value={info.value}></AddAdminForm>
            </DialogCard>
            <DialogCard
              buttonIcon={<Trash />}
              modalTitile="แก้ไขบัญชีผู้ดูแลระบบ"
            >
              <DelAdminForm value={info.value}></DelAdminForm>
            </DialogCard>
          </div>
      ),
      header: () => <span></span>,
    }),
  ]);

  return (
    <div>
      <div className="text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        จัดการบัญชีผู้ดูแลระบบ
      </div>
      {/* <AdminTagSearch></AdminTagSearch> */}
      <div className="mt-8 ">
        <DialogCard
          buttonTitle="+ เพิ่มบัญชีผู้ดูแลระบบ"
          modalTitile="เพิ่มบัญชีผู้ดูแลระบบ"
        >
          <AddAdminForm></AddAdminForm>
        </DialogCard>
      </div>
      <Box className="mt-8">
        <Table elements={elements} defaultColumns={defaultColumns} />
      </Box>
    </div>
  );
}
