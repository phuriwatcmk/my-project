import React from "react";

export default function IdeaUpload() {
  return (
    <div className="mt-8">
      <label
        htmlFor="file-upload"
        className="border rounded-full bg-red border-black p-2"
      >
        <span>export csv</span>
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
