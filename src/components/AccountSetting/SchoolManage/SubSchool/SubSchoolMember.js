import React from "react";
import { Box, Button } from "@mantine/core";
import { createTable } from "@tanstack/react-table";

import { ReactComponent as Trash } from "../../../../assets/icon/trash.svg";
import { ReactComponent as Pencil } from "../../../../assets/icon/pencil.svg";

import Select from "../../../UI/Selector/Select";
import Search from "../../../UI/Search/Search";
import DialogCard from "../../../UI/Card/DaialogCard";
import Table from "../../../UI/Table/Table";
import UserIdUI from "../../../UI/User/UserId";
import AddSubSchoolForm from "../../SchoolManage/SubSchool/SubSchoolForm/AddSubSchoolForm";
import DelSubSchoolForm from "../../SchoolManage/SubSchool/SubSchoolForm/DelSubSchoolForm";
import LinkUI from "../../../UI/Link/LinkUI";

export default function SubSchoolMember() {
  const elements = [
    {
      id: 1,
      startDate: "01/01/22",
      endDate: "01/01/22",
      position: "School",
      userid: "021536",
      userName: "ชื่อ-นามสกุลชื่อ",
      userGoal: "www.google.com",
      userJob: "ครู",
      userSchool: "สังกัด",
      provinces: "จังหวัด",
      userSubject: "ไทย",
      userClass: "ป.1",
    },
    {
      id: 2,
      startDate: "01/01/22",
      endDate: "01/01/22",
      position: "School",
      userid: "021536",
      userName: "ชื่อ-นามสกุลชื่อ",
      userGoal: "www.google.com",
      userJob: "ครู",
      userSchool: "สังกัด",
      provinces: "จังหวัด",
      userSubject: "ไทย",
      userClass: "ป.1",
    },
    {
      id: 3,
      startDate: "01/01/22",
      endDate: "01/01/22",
      position: "School",
      userid: "021536",
      userName: "ชื่อ-นามสกุลชื่อ",
      userGoal: "www.google.com",
      userJob: "ครู",
      userSchool: "สังกัด",
      provinces: "จังหวัด",
      userSubject: "ไทย",
      userClass: "ป.1",
    },
    {
      id: 4,
      startDate: "01/01/22",
      endDate: "01/01/22",
      position: "School",
      userid: "021536",
      userName: "ชื่อ-นามสกุลชื่อ",
      userGoal: "www.google.com",
      userJob: "ครู",
      userSchool: "สังกัด",
      provinces: "จังหวัด",
      userSubject: "ไทย",
      userClass: "ป.1",
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
    table.createDataColumn((row) => row.position, {
      id: "position",
      cell: (info) => info.value,
      header: () => <span>ตำแหน่ง</span>,
    }),
    table.createDataColumn((row) => row.userid, {
      id: "userid",
      cell: (info) => <UserIdUI userId={info.value} />,
      header: () => <span>userid</span>,
    }),
    table.createDataColumn((row) => row.userName, {
      id: "userName",
      cell: (info) => info.value,
      header: () => <span>ชื่อ-นามสกุล</span>,
    }),
    table.createDataColumn((row) => row.userGoal, {
      id: "userGoal",
      cell: (info) => <LinkUI href={info.value} />,
      header: () => <span>หน้าเป้าหมาย</span>,
    }),
    table.createDataColumn((row) => row.userJob, {
      id: "userJob",
      cell: (info) => info.value,
      header: () => <span>อาชีพ</span>,
    }),
    table.createDataColumn((row) => row.userSchool, {
      id: "userSchool",
      cell: (info) => info.value,
      header: () => <span>โรงเรียน</span>,
    }),
    table.createDataColumn((row) => row.provinces, {
      id: "provinces",
      cell: (info) => info.value,
      header: () => <span>จังหวัด</span>,
    }),
    table.createDataColumn((row) => row.userSubject, {
      id: "userSubject",
      cell: (info) => (
        <>
          <div className="flex flex-nowrap max-w-xs">
            <div>
              <Button className="mr-1 w-auto h-8 text-xs text-white  bg-secondary hover:bg-secondary rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
            <div>
              <Button className="mr-1 w-auto h-8 text-xs text-white  bg-secondary  hover:bg-secondary rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
          </div>
        </>
      ),
      header: () => <span>วิชาที่สอน</span>,
    }),
    table.createDataColumn((row) => row.userClass, {
      id: "userClass",
      cell: (info) => (
        <>
          <div className="flex flex-nowrap max-w-xs">
            <div>
              <Button className="mr-1 w-auto h-8 text-xs text-white  bg-secondary hover:bg-secondary rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
            <div>
              <Button className="mr-1 w-auto h-8 text-xs text-white  bg-secondary  hover:bg-secondary rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
          </div>
        </>
      ),
      header: () => <span>ระดับชั้น</span>,
    }),
    table.createDataColumn((row) => row.id, {
      id: "id",
      cell: (info) => (
        <div className="flex justify-end space-x-2">
          <DialogCard buttonIcon={<Pencil />} modalTitile="เพิ่ม Membership">
            <AddSubSchoolForm></AddSubSchoolForm>
          </DialogCard>
          <DialogCard buttonIcon={<Trash />} modalTitile="ลบ Membership">
            <DelSubSchoolForm></DelSubSchoolForm>
          </DialogCard>
        </div>
      ),
      header: () => <span></span>,
    }),
  ]);
  return (
    <div>
      {" "}
      <div className=" mt-8 text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        School Membership
      </div>
      <div className="mt-8">
        <div className="flex flex-row justify-start gap-8">
          <div className="basis-1/6">
            <Select placeholder="อาชีพ" data={[]}></Select>
          </div>
          <div className="basis-1/6">
            <Select placeholder="โรงเรียน" data={[]}></Select>
          </div>
          <div className="basis-1/6">
            <Select placeholder="จังหวัด" data={[]}></Select>
          </div>
          <div className="basis-1/3"></div>
        </div>
        <div className="mt-4 flex flex-row justify-center gap-8">
          <div className="basis-1/3">
            <Select
              placeholder="พิมพ์แท็ก ระดับชั้น หรือ วิชาที่สอน"
              data={[]}
            ></Select>
          </div>
          <div className="basis-1/2">
            <Search placeholder="พิมพ์ชื่อ นามปากกา หรือ userid  "></Search>
          </div>
          <div className="basis-1/6"></div>
        </div>
      </div>
      <div className="mt-8 mb-4 text-md">จำนวน {elements.length} account</div>
      <Box>
        <Table elements={elements} defaultColumns={defaultColumns} />
      </Box>
    </div>
  );
}
