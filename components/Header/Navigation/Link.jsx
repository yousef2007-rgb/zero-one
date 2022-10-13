import React from "react";

export default function Link({ link, name }) {
  return (
    <a href={link} className=" mx-3 text-robot ">
      {name}
    </a>
  );
}
