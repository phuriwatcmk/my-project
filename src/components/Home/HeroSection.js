import React from "react";
import { Anchor, Breadcrumbs, Group, Button, Table } from "@mantine/core";

import djaadmin from "../../assets/images/djaadmin.png";

export default function HeroSection() {
  const items = [
    { title: "Idea", href: "/ideadata" },
    { title: "SubSchool", href: "/accountsetting" },
    { title: "cuponsetting", href: "/cuponsetting" },
    { title: "logicmessage", href: "/logicmsg" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <section
      id="hero"
      className="h-96 lg:h-screen w-full pt-16 lg:pt-20 -mt-16 lg:-mt-20"
      data-aos="fade-in"
    >
      <div className="text-black text-center font-quicksand absolute w-full h-full z-10 flex justify-center items-center lg:items-start lg:pt-32 overflow-hidden">
        <div className="-mt-16 lg:-mt-20">
          <h1
            className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-wide"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Welcome to Inskru admin
          </h1>
          <p
            className="md:text-2xl lg:text-3xl font-bold tracking-wider mt-1 lg:mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            The Happiness Community for Seniors
          </p>
          <>
            <div className="mb-2 mt-8">
              <Breadcrumbs separator=">">{items}</Breadcrumbs>
            </div>
          </>
          <div className="flex tracking-wide w-full h-full z-10 mt-10 flex justify-center items-center">
            <img
              className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-wide"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              src={djaadmin}
              alt="homepic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
