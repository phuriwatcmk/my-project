import React from "react";
import { Anchor, Breadcrumbs, Button } from "@mantine/core";
import HiddenTag from "../UI/HiddenTag/HiddenTag";
export default function EditIdea() {
  const data = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "riot", label: "Riot" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
  ];
  const items = [
    { title: "idea database", href: "ideadata" },
    { title: "edit-idea", href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <div>
      <div className="mb-2">
        <Breadcrumbs separator=">">{items}</Breadcrumbs>
      </div>
      <div className="mt-2 text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        edit-idea
      </div>
      <div className="mt-8">
        <div className="flex flex-row justify-end space-x-3 pb-4">
          <Button
            className="z-40 border rounded-full bg-transparent  hover:bg-transparent border-black text-black"
            placeholder="เรียงลำดับโดย"
          >
            ยกเลิก
          </Button>
          <Button
            className="z-40 border rounded-full bg-transparent  hover:bg-transparent border-black text-black"
            placeholder="เรียงลำดับโดย"
          >
            พรีวิว
          </Button>
          <Button
            className="z-40 border rounded-full bg-transparent  hover:bg-transparent border-black text-black"
            placeholder="เรียงลำดับโดย"
          >
            เปลี่ยนเป็นแบบร่าง
          </Button>
          <Button
            className="z-40 border rounded-full bg-transparent  hover:bg-transparent border-black text-black"
            placeholder="เรียงลำดับโดย"
          >
            บันทึกและเผยแพร่
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 ...">
          <div className="mt-2 text-xl md:text-xl lg:text-2xl font-normal">
            User part
          </div>
        </div>
        <div className="">
          <div className="mt-2 text-xl md:text-xl lg:text-2xl font-normal">
            Admin part
          </div>
          <HiddenTag hiddenTagData={data} />
        </div>
      </div>
    </div>
  );
}
