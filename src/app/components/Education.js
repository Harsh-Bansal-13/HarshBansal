import React, { useRef } from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education, experiences } from "../data/constants";
import EducationCard from "./EducationCard";
import { motion, useInView } from "framer-motion";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className="flex flex-col items-center justify-center border-blue-600">
      <Timeline className="flex flex-col" ref={ref}>
        {education.map((education, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="w-full"
          >
            {" "}
            <TimelineItem>
              <div className="py-[12px] px-2">
                <EducationCard education={education} />
              </div>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  className="text-blue-600 border-blue-600"
                />
                {index !== experiences.length && (
                  <TimelineConnector className="bg-blue-600" />
                )}
              </TimelineSeparator>
            </TimelineItem>
          </motion.div>
        ))}
      </Timeline>
    </div>
  );
};

export default Education;
