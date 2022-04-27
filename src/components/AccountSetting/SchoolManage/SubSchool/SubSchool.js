import React from "react";
import { Anchor, Breadcrumbs, Box, Button} from "@mantine/core";
import { createTable } from "@tanstack/react-table";

import { ReactComponent as Trash } from "../../../../assets/icon/trash.svg";
import { ReactComponent as Pencil } from "../../../../assets/icon/pencil.svg";

import Table from "../../../UI/Table/Table";
import DialogCard from "../../../UI/Card/DaialogCard";
import UserIdUI from '../../../UI/User/UserId'
import SchoolUpload from "../../AccountManage/SchoolUpload";
import AddSubSchoolForm from "../../SchoolManage/SubSchool/SubSchoolForm/AddSubSchoolForm";
import DelSubSchoolForm from "../../SchoolManage/SubSchool/SubSchoolForm/DelSubSchoolForm";
import SubSchoolMember from "./SubSchoolMember";


export default function Schoolmanage() {
  const items = [
    { title: "แพ็คเกจกลุ่มโรงเรียน", href: "schoolmanage" },
    { title: "โรงเรียน A", href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  const elements = [
    {
      id: 1,
      startDate: "01/01/22",
      endDate: "01/01/22",
      position: "ผอ./ฝ่ายวิชาการ",
      userid: "021536",
      userName: "ชื่อ-นามสกุลชื่อ",
      userGoal: "www.google.com",
      userJob: "สังกัด",
      userSchool: "สังกัด",
      provinces: "จังหวัด",
      userSubject: "ไทย",
      userClass: "ป.1",
    },
    {
      id: 2,
      startDate: "01/01/22",
      endDate: "01/01/22",
      position: "ผอ./ฝ่ายวิชาการ",
      userid: "021536",
      userName: "ชื่อ-นามสกุลชื่อ",
      userGoal: "www.google.com",
      userJob: "สังกัด",
      userSchool: "สังกัด",
      provinces: "จังหวัด",
      userSubject: "ไทย",
      userClass: "ป.1",
    },
    {
      id: 3,
      startDate: "01/01/22",
      endDate: "01/01/22",
      position: "ผอ./ฝ่ายวิชาการ",
      userid: "021536",
      userName: "ชื่อ-นามสกุลชื่อ",
      userGoal: "www.google.com",
      userJob: "สังกัด",
      userSchool: "สังกัด",
      provinces: "จังหวัด",
      userSubject: "ไทย",
      userClass: "ป.1",
    },
    {
      id: 4,
      startDate: "01/01/22",
      endDate: "01/01/22",
      position: "ผอ./ฝ่ายวิชาการ",
      userid: "021536",
      userName: "ชื่อ-นามสกุลชื่อ",
      userGoal: "www.google.com",
      userJob: "สังกัด",
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
      cell: (info) => <UserIdUI userId={info.value}/>,
      header: () => <span>userid</span>,
    }),
    table.createDataColumn((row) => row.userName, {
      id: "userName",
      cell: (info) => info.value,
      header: () => <span>ชื่อ-นามสกุล</span>,
    }),
    table.createDataColumn((row) => row.userGoal, {
      id: "userGoal",
      cell: (info) => info.value,
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
              <Button className="mr-1 w-auto h-8 text-xs text-white  bg-red-400 hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
            <div>
              <Button className="mr-1 w-auto h-8 text-xs text-white  bg-red-400  hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
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
              <Button className="mr-1 w-auto h-8 text-xs text-white  bg-blue-400 hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
                {info.value}
              </Button>
            </div>
            <div>
              <Button className="mr-1 w-auto h-8 text-xs text-white  bg-blue-400  hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
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
          <DialogCard buttonIcon={<Pencil />} modalTitile="แก้ไขตำแหน่ง">
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
        <div className="mb-2">
          <Breadcrumbs separator=">">{items}</Breadcrumbs>
        </div>
      <div className="text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        โรงเรียน A
      </div>
      <p className="mt-4 max-w-2xl text-sm text-gray-500">
        สังกัด : xxxxx จังหวัด : xxxxx คูปอง : xxxxxxxxxxxxxxx วันเริ่ม -
        วันหมดอายุ : 01/01/01 - 01/01/01
      </p>
      <div className="mt-8 inline-flex">
        <DialogCard
          buttonTitle="+ เพิ่มบัญชีในกลุ่มนี้"
          modalTitile="เพิ่มบัญชีในกลุ่มนี้"
        >
          <AddSubSchoolForm></AddSubSchoolForm>
        </DialogCard>
        <div className="mx-8">
          <DialogCard buttonTitle="ดูแดชบอร์ด" modalTitile="ดูแดชบอร์ด">
            <form></form>
          </DialogCard>
        </div>
        <SchoolUpload></SchoolUpload>
      </div>
      <div className="mt-8 text-2xl">ผอ. / ฝ่ายวิชาการ</div>
      <div className="mt-2 mb-4 text-sm">จำนวน {elements.length} account</div>
      {/* Table */}
      <Box className="mt-8">
        <Table elements={elements} defaultColumns={defaultColumns} />
      </Box>
      <SubSchoolMember></SubSchoolMember>
    </div>
  );
}
