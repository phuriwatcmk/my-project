import React, { Fragment } from "react";

export default function SchoolUpload() {
  return (
    <Fragment>
      <label
        htmlFor="file-upload"
        className="ml-8 border rounded-full bg-red border-black w-full px-4 py-1"
      >
        <span className="">export csv</span>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only block w-full text-sm text-slate-500"
        />
      </label>
    </Fragment>
  );
}
