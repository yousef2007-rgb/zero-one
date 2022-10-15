import React from "react";
import Question from "./Question";
import Members from "./Members";
export default function Body({}) {
  return (
    <main className=" flex flex-col items-center min-h-screen">
      <Question
        questions={["who are we?", "what do we do? 🤔"]}
        answer={
          "we are a group of AlredwanSchool's student's who's itrested in Robots"
        }
        color="#fb6a4b"
      />
      <Question
        questions={["compititions", "like what? 👇"]}
        answer={
          "we're looking forward to participate in a couple of commpitions"
        }
        color={`green`}
      />
      <Question
        questions={["Ball Collector", "FLL 🤖"]}
        answer={
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        }
        color={`orange`}
      />
      <Question
        questions={["FLL", "WRO 🏆"]}
        answer={
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        }
        color={`purple`}
      />
      <Question
        questions={["WRO", "who is particpating? 👦"]}
        answer={
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        }
        color={`turquoise`}
      />
      <Members />
    </main>
  );
}
