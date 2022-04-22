import React from "react";

export default function IdeaUpload() {
  return (
    <div className="mt-8">
      <label
        htmlFor="file-upload"
        className="flex inline-flex border rounded-full bg-red border-black p-2"
      >
        <a className="mr-1 self-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
          >
            <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path>
          </svg>
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
  );
}
