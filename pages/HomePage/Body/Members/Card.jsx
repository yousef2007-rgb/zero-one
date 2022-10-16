import React from "react";
import { motion } from "framer-motion";
const cardVariants = {
  offscreen: {
    y: 100,
    scale: 0.7,
  },
  onscreen: {
    y: 10,
    rotate: -10,
    scale: 0.7,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
/**
 *
 */
const card = ({ image, name, description, hueA, hueB }) => {
  const hue = (h) => `hsl(${h}, 100%, 50%)`;

  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  return (
    <div className="relative">
      {" "}
      <div
        className=" absolute bottom-0 left-0 top-0 right-0 clip w-screen"
        style={{ backgroundImage: background }}
      />
      <motion.div
        className="bg-black max-w-md flex flex-col items-center justify-center text-center rounded-3xl  backdrop:blur-md drop-shadow-lg bg-opacity-50 p-5 scale-50"
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <img
          src={`/images/members/${image}`}
          alt={name}
          className=" rounded-full w-3/4 aspect-square object-cover"
        />
        <h2 className=" text-5xl text-robot my-6 tablet:text-4xl">{name}</h2>
        <p className=" text-3xl font-bold capitalize tablet:text-2xl">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default card;
