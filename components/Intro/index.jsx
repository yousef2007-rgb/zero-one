import React from "react";
import Button from "./Button";

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
      {/*
      <div className=" flex justify-evenly w-full mt-16">
        <Button link={"#"} name="something" margin={8} />
        <Button link={"#"} name="about us" margin={0} />
        <Button link={"#"} name="something" margin={8} />
      </div>
    */}
    </div>
  );
}
