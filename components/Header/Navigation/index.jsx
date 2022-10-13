import React from "react";
import Link from "./Link";
export default function Navigation() {
  return (
    <nav className=" ml-auto ">
      <Link link={"#"} name={"About Us"} />
      <Link link={"#"} name={"Fll"} />
      <Link link={"#"} name={"WroAbout Us"} />
      <Link link={"#"} name={"Ball collecter"} />
    </nav>
  );
}
