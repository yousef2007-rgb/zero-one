import React from "react";
import SocialMedia from "../SocialMedia";
import styles from "../../styles/Home.module.scss";
export default function Index({}) {
  return (
    <header className=" flex items-center p-5 ">
      <h1 className=" uppercase bold cursor-pointer hover:text-orange-500">
        zero-one
      </h1>
      <SocialMedia />
    </header>
  );
}
