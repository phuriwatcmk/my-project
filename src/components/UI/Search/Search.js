import React from "react";
import { Group, TextInput } from "@mantine/core";

export default function Search({ placeholder }) {
  return (
    <TextInput
      placeholder={placeholder}
      radius="xl"
      label=""
      rightSection={
        <>
          <div className="bg-red-800 rounded-full w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </>
      }
    />
  );
}
