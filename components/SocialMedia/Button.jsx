import React from "react";

const Button = ({ link, Icon }) => {
  console.log(Icon);
  return (
    <a
      href={link}
      target="blank"
      className=" uppercase p-5 bg-myorang text-robot"
    >
      {Icon}
    </a>
  );
};

export default Button;
