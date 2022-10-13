import React from "react";
import SocialMedia from "../SocialMedia";
import styles from "../../styles/Home.module.scss";
import logo from "../../public/images/logo.gif";
import Image from "next/image";
export default function Index({}) {
  return (
    <header className=" flex items-center p-4 fixed w-screen bg-opacity-50 bg-myblack">
      <span className="flex items-center">
        <h1 className=" uppercase bold cursor-pointer ">zero-one</h1>
        <Image src={logo} alt="" width={65} height={65} />
      </span>
      <SocialMedia />
    </header>
  );
}
