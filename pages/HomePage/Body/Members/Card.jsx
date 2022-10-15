import React from "react";
import { motion } from "framer-motion";
const cardVariants = {
  offscreen: {
    y: 300,
    scale: 0.5,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    scale: 0.5,
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
const card = ({ image, name, description }) => {
  const hue = (h) => `hsl(${h}, 100%, 50%)`;

  const background = `linear-gradient(306deg, ${hue(340)}, ${hue(10)})`;
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
          className=" rounded-full w-3/4 "
        />
        <h2 className=" text-5xl text-robot my-6">{name}</h2>
        <p className=" text-3xl font-bold capitalize ">{description}</p>
      </motion.div>
    </div>
  );
};

export default card;
