import React from "react";
import { NavLink } from "react-router-dom";
//assets
import Inskrulogo from "../../../assets/images/Inskrulogo.png";
//compoents
import StatsDropDown from "./StatsDropDown";
import WorkShopDropDown from "./WorkShopDropDown";
import SettingsDropDown from "./SettingsDropDown";

function Nav(props) {
  return (
    <div className="">
      <div className="mt-6 h-7xl">
        <div className="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-10">
                <div className="container px-4 mx-auto flex items-center justify-end h-full">
                  <img
                    src={Inskrulogo}
                    alt="younghappy logo"
                    width="128"
                    height="128"
                  />
                </div>
              </div>
              <StatsDropDown />
              <SettingsDropDown />
              <WorkShopDropDown />
              <WorkShopDropDown />
              <WorkShopDropDown />
              <WorkShopDropDown />
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
