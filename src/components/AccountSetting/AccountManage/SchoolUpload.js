import React, { Fragment } from "react";
import { ReactComponent as Download } from "../../../assets/icon/download.svg";

export default function SchoolUpload() {
  return (
    <Fragment>
      <div className="flex items-center">
        <label
          htmlFor="file-upload"
          className="flex border rounded-full bg-red border-black text-center w-auto h-9 space-x-1"
        >
          <a className="mx-1 self-center">
            <Download />
          </a>
          <span className=" self-center pr-1">export csv.</span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
          />
        </label>
      </div>
    </Fragment>
  );
}
