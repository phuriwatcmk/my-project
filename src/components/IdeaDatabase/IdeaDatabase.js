import React from "react";
import IdeaOption from "./IdeaOption";
import IdeaUpload from "./IdeaUpload";
import { Box } from "@mantine/core";
import Table from "../AccountSetting/AccountManage/Table";
import { createTable } from "@tanstack/react-table";

import { ReactComponent as Pencil } from "../../assets/icon/pencil.svg";
import { ReactComponent as Add } from "../../assets/icon/add.svg";

import { Button } from "@mantine/core";
import DialogCard from "../UI/Card/DaialogCard";
import AddSchoolForm from "../AccountSetting/SchoolManage/SchoolForm/AddSchoolForm";
import UserNameUI from "../../components/UI/User/UserName";

export default function IdeaDatabase() {
  const elements = [
    {
      id: 1,
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "C",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "C",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "C",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
    {
      selected: "Growth mindset1",
      ideaName: "ชื่อไอเดียชื่อไอเดีย",
      writter: "username",
      userTag: "วิทยาศาสตร์",
      hiddenTagByAdmin: "วิทยาศาสตร์",
      receivedUser: "123456",
      created: "01/01/22",
      updated: "01/01/22",
    },
  ];

  const table = createTable().setRowType();
  const defaultColumns = table.createColumns([
    table.createDataColumn((row) => row.selected, {
      id: "selected",
      cell: (info) => info.value,
      header: () => <span>Selected</span>,
    }),
    table.createDataColumn((row) => row.ideaName, {
      id: "ideaName",
      cell: (info) => info.value,
      header: () => <span>ชื่อไอเดีย</span>,
    }),
    table.createDataColumn((row) => row.writter, {
      id: "writter",
      cell: (info) => <UserNameUI username={info.value} />,
      header: () => <span>คนเขียน</span>,
    }),
    table.createDataColumn((row) => row.userTag, {
      id: "userTag",
      cell: (info) => (
        <>
          <div className="flex flex-nowrap max-w-xs overflow-x-auto scrollbarTable snap-x scroll-smooth">
            <div className="snap-center">
              <Button className="mr-1 w-auto h-10 text-xs text-white  bg-blue-800 hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
            <div className="snap-center">
              <Button className="mr-1 w-auto h-10 text-xs text-white  bg-blue-800 hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>

            <DialogCard buttonIcon={<Add />} modalTitile="แก้ไขกลุ่มโรงเรียน">
              <AddSchoolForm></AddSchoolForm>
            </DialogCard>
          </div>
        </>
      ),
      header: () => <span>User Tag</span>,
    }),
    table.createDataColumn((row) => row.hiddenTagByAdmin, {
      id: "hiddenTagByAdmin",
      cell: (info) => (
        <>
          <div className="flex flex-nowrap max-w-xs overflow-x-auto scrollbarTable">
            <div>
              <Button className="mr-1 w-auto h-10 text-xs text-white  bg-red-400 hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
            <div>
              <Button className="mr-1 w-auto h-10 text-xs text-white  bg-red-400  hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
            <div>
              <Button className="mr-1 w-auto h-10 text-xs text-white  bg-red-400  hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>

            <DialogCard buttonIcon={<Add />} modalTitile="แก้ไขกลุ่มโรงเรียน">
              <AddSchoolForm></AddSchoolForm>
            </DialogCard>
          </div>
        </>
      ),
      header: () => <span>Hidden Tag by admin</span>,
    }),
    table.createDataColumn((row) => row.receivedUser, {
      id: "receivedUser",
      cell: (info) => info.value,
      header: () => <span>Received (user)</span>,
    }),
    table.createDataColumn((row) => row.created, {
      id: "created",
      cell: (info) => info.value,
      header: () => <span>Created</span>,
    }),
    table.createDataColumn((row) => row.updated, {
      id: "updated",
      cell: (info) => info.value,
      header: () => <span>Updated</span>,
    }),
    table.createDataColumn((row) => row.id, {
      id: "id",
      cell: (info) => (
        <>
          <DialogCard buttonIcon={<Pencil />} modalTitile="แก้ไขกลุ่มโรงเรียน">
            <AddSchoolForm value={info.value}></AddSchoolForm>
          </DialogCard>
        </>
      ),
      header: () => <span></span>,
    }),
  ]);

  return (
    <div>
      <div className="text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        idea database
      </div>
      <IdeaUpload />
      <IdeaOption />
      <div className="mt-8 mb-4 text-md">จำนวน {elements.length} ไอเดีย</div>
      <Box className="mt-8">
        <Table elements={elements} defaultColumns={defaultColumns} />
      </Box>
    </div>
  );
}
