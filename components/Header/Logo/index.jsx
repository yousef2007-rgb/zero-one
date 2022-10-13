import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.gif";
export function Logo() {
  return (
    <span className="flex items-center">
      <Image src={logo} alt="" width={65} height={65} />
      <h1 className=" uppercase bold cursor-pointer ">zero-one</h1>
    </span>
  );
}
