import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  console.log(project);
  return (
    <Modal
      className="bg-menuOverlay text-white "
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-[#000000a7] flex items-start justify-center overflow-y-scroll transition-all duration-500 ease-in-out">
        <div className="max-w-[800px] w-full rounded-[16px]  text-primary p-[40px] flex flex-col relative border-2 bg-gradient-to-br from-slate-900 via-gray-950 to-gray-900">
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <div className="px-2 w-full">
            <img
              src={project.image}
              className="w-full rounded-lg h-full my-5"
            />
          </div>
          <div className="text-2xl text-white font-semibold  overflow-hidden text-ellipsis whitespace-nowrap max-w-full px-2">
            {project.title}
          </div>
          <div className="text-xs text-slate-400 px-2">{project.date}</div>
          <div className="flex flex-wrap w-full items-center gap-2 mt-3 p-2">
            {project.tags.map((tag) => (
              <div
                className=" text-xs font-normal py-1 px-2 rounded-lg p-2 border-blue-500 border-2 text-blue-400 hover:text-white hover:bg-blue-500"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="text-sm font-normal text-slate-200  text-ellipsis  my-4 p-3 max-w-full">
            {project.description}
          </div>
          <div className="flex  justify-start items-center gap-2 px-2">
            {project.github !== "" && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-full rounded-lg px-6 py-2 border-blue-500 border-2 hover:text-white hover:bg-blue-500"
                href={project.github}
                target="_blank"
              >
                <Link href={project.github} target="display">
                  {" "}
                  View Repo
                </Link>
              </motion.button>
            )}
            {project.webapp !== "" && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-full rounded-lg px-6 py-2 border-blue-500 border-2 hover:text-white hover:bg-blue-500"
                href={project.webapp}
                target="_blank"
              >
                <Link href={project.webapp} target="display">
                  Deployed Link
                </Link>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
