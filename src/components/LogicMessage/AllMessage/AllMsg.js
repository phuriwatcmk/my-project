import React from "react";
import { createTable } from "@tanstack/react-table";

import { ReactComponent as Trash } from "../../../assets/icon/trash.svg";
import { ReactComponent as Pencil } from "../../../assets/icon/pencil.svg";

import { Box} from "@mantine/core";
import DialogCard from "../../UI/Card/DaialogCard";
import AddMsgForm from "./AddMsgForm";
import Table from "../../UI/Table/Table";
import DelMsgForm from "./DelMsg";

export default function AllLMsg() {
  const elements = [
    {
      id: 1,
      logicName: "A",
      linkPaperform: "paperform A",
    },
    {
      id: 2,
      logicName: "A",
      linkPaperform: "paperform A",
    },
    {
      id: 3,
      logicName: "A",
      linkPaperform: "paperform A",
    },
    {
      id: 4,
      logicName: "A",
      linkPaperform: "paperform A",
    },
  ];
  const table = createTable().setRowType();

  const defaultColumns = table.createColumns([
    table.createDataColumn((row) => row.linkPaperform, {
      id: "linkPaperform",
      cell: (info) => info.value,
      header: () => <span>ข้อความ</span>,
    }),
    table.createDataColumn((row) => row.logicName, {
      id: "logicName",
      cell: (info) => info.value,
      header: () => <span>ชื่อ Logic</span>,
    }),
    table.createDataColumn((row) => row.id, {
      id: "id",
      cell: (info) => (
        <div className="flex justify-end space-x-2">
          <DialogCard buttonIcon={<Pencil />} modalTitile="แก้ไข Logic">
            <AddMsgForm value={info.value}></AddMsgForm>
          </DialogCard>
          <DialogCard buttonIcon={<Trash />} modalTitile="ลบ Logic">
            <DelMsgForm value={info.value}></DelMsgForm>
          </DialogCard>
        </div>
      ),
      header: () => <span></span>,
    }),
  ]);
  return (
    <div>
      <div className="mt-16 text-xl md:text-xl lg:text-2xl tracking-wide">
        Message ทั้งหมด
      </div>
      <div className="mt-8 ">
        <DialogCard buttonTitle="+ เพิ่มข้อความ" modalTitile="เพิ่มข้อความ">
          {/* Child */}
          <AddMsgForm></AddMsgForm>
        </DialogCard>
      </div>
      {/* Table */}
      <Box className="mt-8">
        <Table elements={elements} defaultColumns={defaultColumns} />
      </Box>
    </div>
  );
}
