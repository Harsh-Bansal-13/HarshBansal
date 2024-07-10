import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/constants";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <ul ref={ref} className="w-full flex flex-wrap justify-center gap-7">
      {skills.map((item, index) => (
        <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.2 }}
          className="w-full"
        >
          <div
            key={index}
            className="w-full max-w-500 bg-card border border-blue-600 rounded-xl py-4 px-9 md:max-w-400 md:py-2 lg:max-w-330"
          >
            <div
              key={index}
              className="mb-5 justify-center items-center flex font-bold text-3xl"
            >
              {item.title}
            </div>
            <div
              key={index}
              className="flex flex-wrap justify-center mb-5 gap-3"
            >
              {item.skills.map((skill) => (
                <div
                  key={index}
                  className="flex items-center gap-1 justify-center text-xs md:text-sm lg:text-base text-text-primary-80 rounded-lg py-2 px-3 md:py-1 md:px-2 lg:py-2 lg:px-3 font-normal"
                >
                  <img
                    key={index}
                    src={skill.image}
                    className="w-6 h-6 sm:w-4 sm:h-4"
                  />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default Skills;
