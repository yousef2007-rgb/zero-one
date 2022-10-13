import React from "react";
import Button from "./Button";
import Facebook from "../../public/icons/facebookLogo";
import Instagram from "../../public/icons/instagramLogo";
import Youtube from "../../public/icons/youtubeLogo";
export default function Index({}) {
  return (
    <div className=" flex ">
      <Button Icon={<Instagram />} link={"#"} />
    </div>
  );
}
