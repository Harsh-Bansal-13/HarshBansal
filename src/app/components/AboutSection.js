import React, { useState, useTransition, useEffect } from "react";
import aboutImage from "../images/AboutImage.jpg";
import Image from "next/image";
import TabButton from "./TabButton";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import { motion, useAnimation } from "framer-motion";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -14, 0], // Y-axis movement
      scale: [1.001, 1.001, 1.001], // Scale effect
      transition: {
        duration: 3, // Duration of the animation
        repeat: Infinity, // Repeat the animation infinitely
        ease: "easeInOut", // Easing function
      },
    });
  }, [controls]);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: <Skills></Skills>,
    },
    {
      title: "Education",
      id: "Education",
      content: <Education></Education>,
    },
    {
      title: "Experience",
      id: "Experience",
      content: <Experience></Experience>,
    },
  ];

  return (
    <section id="about" className="text-white pt-14">
      <div className="gap-10 md:grid md:grid-cols-3 items-center py-8 px-4 sm:py-14 xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 mb-10 mx-auto h-full w-full md:flex md:items-center md:justify-center lg:items-start lg:justify-start"
        >
          <motion.div
            animate={controls}
            className="rounded-3xl flex items-center justify-center"
          >
            <Image
              src={aboutImage}
              className="rounded-3xl shadow-blue-600 shadow-md"
              width={300}
              height={300}
              alt="About Image"
            />
          </motion.div>
        </motion.div>
        <div className="col-span-2 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 text-3xl font-bold">
              About me
            </h2>
            <p>
              I’m a pre-final year BTech student at NIT Kurukshetra,
              specializing in Information Technology. My passion lies in
              problem-solving and exploring innovative solutions. I thrive on
              challenges that push my boundaries and fuel my desire for
              continuous learning. Beyond academics, my family and friends
              provide the motivation and support that drive me to excel. I am
              always eager to connect, collaborate, and take on new
              opportunities that foster growth and shared success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex mt-8"
          >
            <TabButton
              selectTab={() => {
                handleTabChange("skills");
              }}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => {
                handleTabChange("Education");
              }}
              active={tab === "Education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("Experience");
              }}
              active={tab === "Experience"}
            >
              Experience
            </TabButton>
          </motion.div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
