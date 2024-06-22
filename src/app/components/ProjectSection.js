import { style } from "@mui/system";
import React, { useState, useTransition, useRef } from "react";
import styled from "styled-components";
import { projects } from "../data/constants";
import ProjectCard from "./ProjectCard";
import TabButton from "./TabButton";
import ProjectDetails from "./ProjectDetails";
import { motion, useInView } from "framer-motion";

const ProjectSection = ({ openModal, setOpenModal }) => {
  const [tab, setTab] = useState("skills");
  const [toggle, setToggle] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setToggle(id);
    });
  };
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects" className="text-white pt-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 text-4xl font-bold mb-3">
          Projects
        </h2>
        <p>
          Here is the list of projects I have worked on during my coding
          journey.
        </p>
        <div className="flex mt-8 p-2  px-12 rounded-lg mb-8">
          <TabButton
            selectTab={() => {
              handleTabChange("all");
            }}
            active={toggle === "all"}
          >
            All
          </TabButton>
          <TabButton
            selectTab={() => {
              handleTabChange("web app");
            }}
            active={toggle === "web app"}
          >
            Web App's
          </TabButton>

          <TabButton
            selectTab={() => {
              handleTabChange("ml");
            }}
            active={toggle === "ml"}
          >
            Machine Learning
          </TabButton>
          <TabButton
            selectTab={() => {
              handleTabChange("other");
            }}
            active={toggle === "other"}
          >
            Others
          </TabButton>
        </div>

        <motion.ul
          ref={ref}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          {toggle === "all" &&
            projects.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              </motion.li>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              </motion.li>
            ))}
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </motion.ul>
      </div>
    </section>
  );
};

export default ProjectSection;
