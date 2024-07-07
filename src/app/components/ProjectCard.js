import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div
      className="w-[330px] h-[550px] bg-card cursor-pointer rounded-[10px] shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-500 ease-in-out p-[26px_10px] flex flex-col gap-[14px] hover:translate-y-[-10px] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-[1.1] bg-menuOverlay"
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <div className="px-2 w-full h-1/3">
        <img src={project.image} className="w-full rounded-lg h-full" />
      </div>{" "}
      <div className="flex flex-wrap w-full items-center gap-2 my-3 px-2">
        {project.tags.map((tag) => (
          <div
            className=" text-xs font-normal py-1 px-2 rounded-lg p-2 border-blue-500 border-2 text-blue-400 hover:text-white hover:bg-blue-500"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-0 px-2">
        <div className="text-2xl text-white font-semibold  overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
          {project.title}
        </div>
        <div className="text-xs text-slate-400">{project.date}</div>
        <div className="text-sm font-normal text-slate-200 overflow-hidden text-ellipsis line-clamp-3 mt-2 max-w-full">
          {project.description}
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-2 px-2">
        {project.github !== "" && (
          <motion.button
            className="text-sm rounded-lg px-2 py-1 border-blue-500 border-2 hover:text-white hover:bg-blue-500"
            href={project.github}
            target="_blank"
          >
            <Link href={project.github} target="display">
              View Repo
            </Link>
          </motion.button>
        )}
        {project.webapp && (
          <motion.button
            className="text-sm rounded-lg px-2 py-1 border-blue-500 border-2 hover:text-white hover:bg-blue-500"
            href={project.webapp}
            target="display"
          >
            <Link href={project.webapp} target="display">
              Deployed Link
            </Link>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
