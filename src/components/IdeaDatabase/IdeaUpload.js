import React from "react";
import { ReactComponent as Download } from "../../assets/icon/download.svg";

export default function IdeaUpload() {
  return (
    <div className="mt-8 grid grid-cols-12">
      <label
        htmlFor="file-upload"
        className="flex border rounded-full bg-red border-black p-2"
      >
        <Download className="self-center" />
        <span>export csv.</span>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
        />
      </label>
    </div>
  );
}
