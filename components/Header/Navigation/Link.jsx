import React from "react";

export default function Link({ name, spot }) {
  return (
    <button
      className=" mx-3 text-robot hover:text-myorange "
      onClick={() => window.scrollTo(0, spot)}
    >
      {name}
    </button>
  );
}
