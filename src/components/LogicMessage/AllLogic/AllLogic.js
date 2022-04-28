import React from "react";
import { Box, Button } from "@mantine/core";
import { createTable } from "@tanstack/react-table";

import { ReactComponent as Trash } from "../../../assets/icon/trash.svg";
import { ReactComponent as Pencil } from "../../../assets/icon/pencil.svg";

import DialogCard from "../../UI/Card/DaialogCard";
import AddLogicForm from "./AddLogicForm";
import DelLogicForm from "./DelLogicForm";
import Table from "../../UI/Table/Table";
import LinkUI from "../../UI/Link/LinkUI";
export default function AllLogic() {
  const elements = [
    {
      id: 1,
      logicName: "A",
      linkPaperform: "paperform A",
      hiddenTag: "Text",
    },
    {
      id: 2,
      logicName: "A",
      linkPaperform: "paperform A",
      hiddenTag: "Text",
    },
    {
      id: 3,
      logicName: "A",
      linkPaperform: "paperform A",
      hiddenTag: "Text",
    },
    {
      id: 4,
      logicName: "A",
      linkPaperform: "paperform A",
      hiddenTag: "Text",
    },
  ];
  const table = createTable().setRowType();

  const defaultColumns = table.createColumns([
    table.createDataColumn((row) => row.logicName, {
      id: "logicName",
      cell: (info) => info.value,
      header: () => <span>ชื่อ Logic</span>,
    }),
    table.createDataColumn((row) => row.linkPaperform, {
      id: "linkPaperform",
      cell: (info) => <LinkUI href={info.value} name={info.value} />,
      header: () => <span>Link Paperform</span>,
    }),
    table.createDataColumn((row) => row.hiddenTag, {
      id: "hiddenTag",
      cell: (info) => (
        <>
          <div className="flex flex-nowrap max-w-xs">
            <div className="snap-center">
              <Button className="mr-1 w-auto h-10 text-xs text-white  bg-secondary hover:bg-secondary rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
            <div className="snap-center">
              <Button className="mr-1 w-auto h-10 text-xs text-white  bg-secondary hover:bg-secondary rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
          </div>
        </>
      ),
      header: () => <span>Hidden Tag</span>,
    }),
    table.createDataColumn((row) => row.id, {
      id: "id",
      cell: (info) => (
        <div className="flex justify-end space-x-2">
          <DialogCard buttonIcon={<Pencil />} modalTitile="แก้ไข Logic">
            <AddLogicForm value={info.value}></AddLogicForm>
          </DialogCard>
          <DialogCard buttonIcon={<Trash />} modalTitile="ลบ Logic">
            <DelLogicForm value={info.value}></DelLogicForm>
          </DialogCard>
        </div>
      ),
      header: () => <span></span>,
    }),
  ]);
  return (
    <div>
      <div className="mt-16 text-xl md:text-xl lg:text-2xl tracking-wide">
        Logic ทั้งหมด
      </div>
      <div className="mt-8 ">
        <DialogCard buttonTitle="+ เพิ่ม Logic" modalTitile="เพิ่ม Logic">
          {/* child add logic */}
          <AddLogicForm></AddLogicForm>
        </DialogCard>
      </div>
      <Box className="mt-8">
        <Table elements={elements} defaultColumns={defaultColumns} />
      </Box>
    </div>
  );
}
