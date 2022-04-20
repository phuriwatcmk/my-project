import React from "react";
import StatDropDown from "./StatDropDown";

function Nav(props) {
  return (
    <div>
      <div className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-10">
                <h2>Insku</h2>
              </div>
              <StatDropDown />
              <StatDropDown />
              <StatDropDown />
              <StatDropDown />

            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
