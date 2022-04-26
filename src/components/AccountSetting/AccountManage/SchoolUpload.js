import React, { Fragment } from "react";
import { ReactComponent as Download } from "../../../assets/icon/download.svg";

export default function SchoolUpload() {
  return (
    <Fragment>
      <div className="">
        <label
          htmlFor="file-upload"
          className="inline-flex border rounded-full bg-red border-black p-2"
        >
          <a className="mr-1 self-center">
            <Download/>
          </a>
          <span>export csv.</span>
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
