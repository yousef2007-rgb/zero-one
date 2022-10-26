import React from "react";
import { motion } from "framer-motion";
export default function Question({ questions, answer, color }) {
  return !color ? (
    "loading"
  ) : (
    <section className="flex flex-col items-center justify-center h-screen">
      <motion.h2
        className="inline-block px-6 py-4 mx-1 text-5xl shadow-xl  text-gray7 text-robot w-fit tablet:text-4xl"
        style={{
          backgroundColor: color,
        }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        {questions[0]}
      </motion.h2>
      <motion.p
        className="px-4 my-16 text-3xl text-center text-gray3 text-normal tablet:text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        {answer}
      </motion.p>
      <motion.span
        className="block mt-16 text-3xl cursor-pointer animate-bounce bold tablet:text-2xl"
        onClick={() =>
          window.scrollTo(0, window.pageYOffset + window.innerHeight)
        }
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {questions[1]}
      </motion.span>
    </section>
  );
}
