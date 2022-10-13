import React from "react";

export default function Button({ link, name, margin }) {
  return (
    <a
      href={link}
      className={` uppercase p-3 bg-myorange text-robot bold mt-${margin} hover:bg-white h-fit`}
    >
      {name}
    </a>
  );
}
