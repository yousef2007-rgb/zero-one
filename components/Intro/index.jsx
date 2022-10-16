import React from "react";

export default function Intro() {
  return (
    <div className=" w-full min-h-screen flex items-center  flex-col">
      <h1
        className=" text-9xl bg-clip-text text-transparent  my-auto cursor-pointer tablet:text-6xl "
        style={{
          backgroundImage: 'url("/images/hero-background.webp")',
        }}
        onClick={() => window.scrollTo(0, 700)}
      >
        zero-one
      </h1>
    </div>
  );
}
