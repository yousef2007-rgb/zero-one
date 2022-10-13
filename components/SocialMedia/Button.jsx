import React from "react";

const Button = ({ link, Icon }) => {
  console.log(Icon);
  return (
    <a href={link} target="_blank">
      {Icon}
    </a>
  );
};

export default Button;
