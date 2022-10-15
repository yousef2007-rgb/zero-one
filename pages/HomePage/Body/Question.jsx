import React from "react";
import { motion } from "framer-motion";
export default function Question({ questions, answer, color }) {
  return !color ? (
    loading
  ) : (
    <section className="h-screen flex flex-col items-center justify-center">
      <motion.h2
        className=" inline-block text-gray7 px-6 py-4 text-6xl shadow-xl text-robot w-fit"
        style={{
          backgroundColor: color,
        }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        {questions[0]}
      </motion.h2>
      <motion.p
        className="text-5xl text-gray3 px-4 text-normal text-center my-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {answer}
      </motion.p>
      <motion.span
        className="animate-bounce text-3xl block cursor-pointer mt-16 bold"
        onClick={() => window.scrollTo(0, window.pageYOffset + 800)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {questions[1]}
      </motion.span>
    </section>
  );
}
