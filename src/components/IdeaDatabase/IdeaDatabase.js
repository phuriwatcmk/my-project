import React from "react";
import { Link } from "react-router-dom";

import IdeaOption from "./IdeaOption";
import IdeaUpload from "./IdeaUpload";
import { Box } from "@mantine/core";
import Table from "../AccountSetting/AccountManage/Table";
import { createTable } from "@tanstack/react-table";

import { ReactComponent as Pencil } from "../../assets/icon/pencil.svg";

import { Button } from "@mantine/core";
import UserNameUI from "../../components/UI/User/UserName";
import ReceivedUser from "../IdeaDatabase/ReceivedUser";
import TagAdd from "./TagAdd";

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
        <div className="flex">
          <div className="mr-1 flex flex-nowrap my-custom-width overflow-x-auto scrollbarTable snap-x scroll-smooth">
            <div className="snap-center">
              <Button className="mr-1 w-auto h-10 text-xs text-white bg-secondary hover:bg-secondary rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
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
          <TagAdd></TagAdd>
        </div>
      ),
      header: () => <span>User Tag</span>,
    }),
    table.createDataColumn((row) => row.hiddenTagByAdmin, {
      id: "hiddenTagByAdmin",
      cell: (info) => (
        <div className=" flex">
          <div className="mr-1 flex flex-nowrap my-custom-width overflow-x-auto scrollbarTable">
            <div>
              <Button className="mr-1 w-auto h-10 text-xs text-black bg-error hover:bg-error rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
            <div>
              <Button className="mr-1 w-auto h-10 text-xs text-black  bg-error  hover:bg-error rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
            <div>
              <Button className="mr-1 w-auto h-10 text-xs text-black  bg-error  hover:bg-error rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
          </div>
          <TagAdd></TagAdd>
        </div>
      ),
      header: () => <span>Hidden Tag by admin</span>,
    }),
    table.createDataColumn((row) => row.receivedUser, {
      id: "receivedUser",
      cell: (info) => <ReceivedUser userdata={info.value}></ReceivedUser>,
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
          <Link to="/idea/editidea">
            <Button
              classNames={{
                root: "z-40 border rounded-full bg-transparent  hover:bg-transparent border-black text-black border-blue",
              }}
            >
              <Pencil />
            </Button>
          </Link>
        </>
      ),
      header: () => <span></span>,
    }),
  ]);

  return (
    <div>
      <div className="text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        Idea database
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
