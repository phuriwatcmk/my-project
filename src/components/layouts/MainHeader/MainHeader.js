import React from "react";
//assets
import Inskrulogo from "../../../assets/images/Inskrulogo.png";
//compoents
// import StatsDropDown from "./StatsDropDown";
// import WorkShopDropDown from "./WorkShopDropDown";
// import SettingsDropDown from "./SettingsDropDown";

import { Anchor, Breadcrumbs } from "@mantine/core";

function Nav(props) {
  const items = [
    { title: "Idea", href: "/idea/ideadata" },
    { title: "EditIdea", href: "/idea/editidea" },
    { title: "AdminManage", href: "/adminmanage" },
    { title: "MemberManage", href: "/membermanage" },
    { title: "SchoolManage", href: "/school/schoolmanage" },
    { title: "SubSchoolManage", href: "/school/subschool" },
    { title: "CuponSetting", href: "/cuponsetting" },
    { title: "Logic&Message", href: "/logicmsg" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <div className="">
      <div className="mt-6 h-7xl">
        <div className="max-w-7xl mx-0 px-4 pb-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="z-50 flex items-center">
              <div className="flex-shrink-0 mr-10">
                <div className="container px-4 mx-auto flex items-center justify-end h-full">
                  <Anchor href="/home">
                    <img
                      src={Inskrulogo}
                      alt="inskru logo"
                      width="128"
                      height="128"
                    />
                  </Anchor>
                </div>
              </div>
              {/* <StatsDropDown />
              <SettingsDropDown />
              <WorkShopDropDown /> */}
              <Breadcrumbs separator=">">{items}</Breadcrumbs>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
