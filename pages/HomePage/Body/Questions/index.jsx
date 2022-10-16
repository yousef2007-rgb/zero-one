import React from "react";
import QuestionsData from "../../../../Data/Questions.json";
import Question from "./Question";
export default function Questions() {
  return (
    <>
      {QuestionsData.map((value, index) => (
        <Question
          questions={value.questions}
          answer={value.answer}
          color={value.color}
        />
      ))}
    </>
  );
}
