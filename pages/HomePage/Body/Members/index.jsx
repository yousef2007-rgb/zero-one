import React from "react";
import Card from "./Card";
import MembersData from "../../../../Data/Members.json";

export default function index() {
  return (
    <div>
      {MembersData.map((value, index) => (
        <Card
          key={index}
          name={value.name}
          image={value.image}
          description={value.description}
          hueA={value.hueA}
          hueB={value.hueB}
        />
      ))}
    </div>
  );
}
