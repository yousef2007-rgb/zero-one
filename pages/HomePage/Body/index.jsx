import React from "react";
import Question from "./Questions";
import Members from "./Members";
export default function Body({}) {
  return (
    <main className=" flex flex-col items-center min-h-screen">
      <Question />
      <Members />
    </main>
  );
}
