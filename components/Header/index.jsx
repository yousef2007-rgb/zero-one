import { Logo } from "./Logo";
import React from "react";
import SocialMedia from "../SocialMedia";
import Navigation from "./Navigation";
import styles from "../../styles/Home.module.scss";
import logo from "../../public/images/logo.gif";
import Image from "next/image";
export default function Index({}) {
  return (
    <header className=" flex items-center p-4 fixed w-full max-w-6xl bg-opacity-50 bg-myblack">
      <Logo />
      <Navigation />
      {/*<SocialMedia />*/}
    </header>
  );
}
