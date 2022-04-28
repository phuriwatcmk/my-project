import React from "react";
import { Box } from "@mantine/core";
import { createTable } from "@tanstack/react-table";

import { ReactComponent as Trash } from "../../../assets/icon/trash.svg";
import { ReactComponent as Pencil } from "../../../assets/icon/pencil.svg";

import DialogCard from "../../UI/Card/DaialogCard";
import Table from "../../UI/Table/Table";
import UploadPic from "./UploadPic";

export default function Allpic() {
  const elements = [
    {
      id: 1,
      logicName: "A",
      picture: "picture A",
    },
    {
      id: 2,
      logicName: "A",
      picture: "picture A",
    },
    {
      id: 3,
      logicName: "A",
      picture: "picture A",
    },
    {
      id: 4,
      logicName: "A",
      picture: "picture A",
    },
  ];
  const table = createTable().setRowType();

  const defaultColumns = table.createColumns([
    table.createDataColumn((row) => row.picture, {
      id: "picture",
      cell: (info) => info.value,
      header: () => <span>รูปภาพ</span>,
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
          <DialogCard buttonIcon={<Pencil />} modalTitile="เพิ่มรูปภาพ">
            <UploadPic value={info.value}></UploadPic>
          </DialogCard>
          <DialogCard buttonIcon={<Trash />} modalTitile="ลบรูปภาพ">
            <UploadPic value={info.value}></UploadPic>
          </DialogCard>
        </div>
      ),
      header: () => <span></span>,
    }),
  ]);
  return (
    <div>
      <div className="mt-8 ">
        <DialogCard buttonTitle="+ เพิ่มรูปภาพ" modalTitile="เพิ่มรูปภาพ">
          {/* child add message */}
          <UploadPic></UploadPic>
        </DialogCard>
      </div>
      <Box className="mt-8">
        <Table elements={elements} defaultColumns={defaultColumns} />
      </Box>
    </div>
  );
}
