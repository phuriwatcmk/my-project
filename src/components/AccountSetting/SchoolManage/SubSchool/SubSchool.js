import React from "react";
import { Anchor, Breadcrumbs, Group, Button, Table } from "@mantine/core";

import Select from "../../../UI/Selector/Select";
import Search from "../../../UI/Search/Search";
import DialogCard from "../../../UI/Card/DaialogCard";
import SchoolUpload from "../../AccountManage/SchoolUpload";
import AddSubSchoolForm from "../../SchoolManage/SubSchool/SubSchoolForm/AddSubSchoolForm";
import DelSubSchoolForm from "../../SchoolManage/SubSchool/SubSchoolForm/DelSubSchoolForm";
export default function Schoolmanage() {
  const items = [
    { title: "จัดการบัญชี Membership", href: "#" },
    { title: "โรงเรียน A", href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  return (
    <div>
      {" "}
      <>
        <div className="mb-2">
          <Breadcrumbs separator=">">{items}</Breadcrumbs>
        </div>
      </>
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
        <div className="ml-8">
          <DialogCard buttonTitle="ดูแดชบอร์ด" modalTitile="ดูแดชบอร์ด">
            <form></form>
          </DialogCard>
        </div>
        <DialogCard
          buttonIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          }
          modalTitile="ลบกลุ่มโรงเรียน"
        >
          <DelSubSchoolForm></DelSubSchoolForm>
        </DialogCard>

        <DialogCard
          buttonIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          }
          modalTitile="แก้ไขกลุ่มโรงเรียน"
        >
          <AddSubSchoolForm></AddSubSchoolForm>
        </DialogCard>
        <SchoolUpload></SchoolUpload>
      </div>
      <div className="mt-8 text-2xl">ผอ. / ฝ่ายวิชาการ</div>
      <div className="mt-2 mb-4 text-sm">จำนวน 12,345 account</div>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <div className="mt-8 text-xl">School Membership</div>
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
        </div>
        <div className="mt-8 flex flex-row justify-center gap-8">
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
        <div className="mt-8 mb-4 text-sm">จำนวน 12,345 account</div>
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}
