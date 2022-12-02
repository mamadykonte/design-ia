import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative h-screen w-screen bg-[url('/cover.png')] bg-no-repeat bg-cover">
      <div className="container w-4/6 h-40 absolute bg-[url('/arrow.png')] bg-auto bg-no-repeat top-1/2 left-[18%] xl:left-1/4  m-auto"></div>
      <div className="container w-20 h-72 absolute bg-[url('/women.png')] bg-auto bg-no-repeat top-1/2  left-1/2 transform  -translate-x-0 -translate-y-0"></div>
      <div className="absolute bottom-6 left-[45%]">
        <Button url="#">
          s&apos;évader
        </Button>
      </div>
    </section>
  );
};

export default Hero;
