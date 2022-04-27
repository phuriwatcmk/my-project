import React from "react";

import djaadmin from "../../assets/images/djaadmin.png";

export default function HeroSection() {

  return (
    <section
      id="hero"
      className="lg:h-screen w-full"
      data-aos="fade-in"
    >
      <div className="text-black text-center font-quicksand absolute w-full h-full z-10 flex justify-center items-center lg:items-start lg:pt-32 overflow-hidden">
        <div className="-mt-16 lg:-mt-20">
            <div className="mb-2 mt-8">
              {/* <Breadcrumbs separator=">">{items}</Breadcrumbs> */}
            </div>
          <div className="flex tracking-wide w-full h-full z-10 mt-10 justify-center items-center">
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
