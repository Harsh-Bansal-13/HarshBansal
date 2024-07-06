import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProfileCard from "./ProfileCard";
const CodingProfile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectsData = [
    {
      id: 4,
      title: "Leetcode",
      description: "Project 4 description",
      image:
        "https://res.cloudinary.com/djearclq9/image/upload/v1718644274/umysyizmacop1ueejliw.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "https://leetcode.com/u/Harsh_Bansal_13/",
    },
    {
      id: 1,
      title: "CodeForces",
      description: "Project 1 description",
      image:
        "https://res.cloudinary.com/djearclq9/image/upload/v1718644274/prvcqordbmyj4kwlwzfm.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://codeforces.com/profile/coder_dude_13",
    },
    {
      id: 2,
      title: "Codechef",
      description: "Project 2 description",
      image:
        "https://res.cloudinary.com/djearclq9/image/upload/v1718644274/xlphfpjf8bbn83cj3zgs.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://www.codechef.com/users/coder_guy_13",
    },
    {
      id: 3,
      title: "GeeksforGeeks",
      description: "Project 3 description",
      image:
        "https://res.cloudinary.com/djearclq9/image/upload/v1718644285/gdbhkkwoludqohqehhr2.png",
      tag: ["All", "Web"],
      previewUrl: "https://www.geeksforgeeks.org/user/harshbansal1717/",
    },
  ];
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="profiles" className="mt-8 pt-24">
      <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 text-3xl font-bold mb-20">
        Coding Profiles
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.2 }}
          >
            <ProfileCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CodingProfile;
