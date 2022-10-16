import React from "react";
import Link from "./Link";
export default function Navigation() {
  return (
    <nav className=" ml-auto tablet:hidden">
      <Link spot={700} name={"About Us"} />
      <Link spot={1500} name={"compititions"} />
      <Link spot={4700} name={"participants"} />
    </nav>
  );
}
