import React from "react";

export default function Intro() {
  return (
    <div className=" w-full h-screen flex items-center justify-center flex-col">
      <h1
        className=" text-9xl bg-clip-text text-transparent bg-fixed"
        style={{
          backgroundImage: 'url("/images/hero-background.webp")',
        }}
      >
        zero-one
      </h1>
    </div>
  );
}
