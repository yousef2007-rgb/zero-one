import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.gif";
export function Logo() {
  return (
    <span
      className="flex items-center tablet:mx-auto"
      onClick={() => window.scrollTo(0, 0)}
    >
      <Image src={logo} alt="" width={65} height={65} />
      <h1 className=" uppercase bold cursor-pointer ">zero-one</h1>
    </span>
  );
}
