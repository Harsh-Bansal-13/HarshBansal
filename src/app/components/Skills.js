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
          <div className="w-full max-w-500 bg-card border border-blue-600 rounded-xl py-4 px-9 md:max-w-400 md:py-2 lg:max-w-330">
            <div className="mb-5 justify-center items-center flex font-bold text-3xl">
              {item.title}
            </div>
            <div className="flex flex-wrap justify-center mb-5 gap-3">
              {item.skills.map((skill) => (
                <div className="flex items-center gap-2 justify-center text-sm md:text-sm lg:text-base text-text-primary-80 rounded-lg py-2 px-3 md:py-1 md:px-2 lg:py-2 lg:px-3 font-normal">
                  <img src={skill.image} className="w-6 h-6" />
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
