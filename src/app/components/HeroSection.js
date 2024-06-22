import React from "react";
import Image from "next/image";
import Link from "next/link";
import Harsh from "../images/Harsh.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import { Bio } from "../data/constants";

const HeroSection = () => {
  const controls = useAnimation();
  return (
    <section id="HeroSection" className="p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800">
              Hi, I'm{" "}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Harsh",
                1000,
                "Software Developer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg">
            {Bio.description}
          </p>
          <div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800 text-white"
            >
              <Link href={"#contact"}>Hire Me</Link>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="px-1 py-1 w-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800 sm:w-fit rounded-full bg-transparent  text-white  mt-3 lg:mt-0"
            >
              <span className="block bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 hover:bg-slate-800 rounded-full px-5 py-2">
                <Link href={Bio.resume} target="display">
                  {" "}
                  Download CV{" "}
                </Link>
              </span>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <motion.div
            animate={controls}
            onMouseLeave={() =>
              controls.start({
                y: [0, -14, 0], // Y-axis movement
                scale: [1.001, 1.001, 1.001], // Scale effect
                transition: {
                  duration: 3, // Duration of the animation
                  repeat: Infinity, // Repeat the animation infinitely
                  ease: "easeInOut", // Easing function
                },
              })
            }
            className="rounded-full w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative mx-auto"
          >
            <Image
              src={Harsh}
              alt="Harsh's Profile"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-blue-600 shadow-md"
              width={400}
              height={400}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
