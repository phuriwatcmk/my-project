import React from "react";
import { Group, Button, Table } from "@mantine/core";

import Select from "../../UI/Selector/Select";
import DateRange from "../../UI/DatePickerRange/DatePickerRange";
import Search from "../../UI/Search/Search";
import DialogCard from "../../UI/Card/DaialogCard";
import SchoolUpload from "./SchoolUpload";
import AddMemberForm from "./MemberForm/AddMemberForm";
import DelAdminForm from "./MemberForm/DelMemberForm";

export default function MemberManage() {
  return (
    <div>
      {" "}
      <div className="text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        จัดการบัญชี Membership
      </div>
      <div className="mt-8 inline-flex">
        {/* Addmembership dialog */}
        <DialogCard
          buttonTitle="+ เพิ่ม Membership"
          modalTitile="เพิ่ม Membership"
        >
          <AddMemberForm></AddMemberForm>
        </DialogCard>

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
          modalTitile="ลบบัญชี Membership"
        >
          <DelAdminForm></DelAdminForm>
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
          modalTitile="แก้ไขบัญชี Membership"
        >
          <AddMemberForm></AddMemberForm>
        </DialogCard>

        <SchoolUpload></SchoolUpload>
      </div>
      <div className="mt-8">
        <div className="">
          <div className="">
            <DateRange
              label=""
              placeholder="เลือกวันที่เริ่ม - หมดอายุ"
            ></DateRange>
          </div>
        </div>
        <div className="mt-8 flex flex-row justify-center gap-8">
          <div className="basis-1/6">
            <Select placeholder="แพ็คเกจ" data={[]}></Select>
          </div>
          <div className="basis-1/6">
            <Select placeholder="ตำแหน่ง" data={[]}></Select>
          </div>
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
      </div>
      <div className="mt-8 mb-4 text-md">จำนวน 12,345 ไอเดีย</div>
    </div>
  );
}
