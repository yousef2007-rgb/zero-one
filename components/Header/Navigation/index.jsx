import React from "react";
import Link from "./Link";
export default function Navigation() {
  return (
    <nav className=" ml-auto tablet:hidden">
      <Link link={"#"} name={"About Us"} />
      <Link link={"#"} name={"FLL"} />
      <Link link={"#"} name={"WRO"} />
      <Link link={"#"} name={"Ball collecter"} />
    </nav>
  );
}
