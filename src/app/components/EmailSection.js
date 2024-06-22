import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { Snackbar } from "@mui/material";

const EmailSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      subject: subject,
      message: message,
    };
    console.log("hARSH");
    emailjs
      .send("service_cyh4ng4", "template_tstgesc", data, "ulAX44r2ETvO9-wpQ")
      .then(
        (result) => {
          setEmailSubmitted(true);
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const cardVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };
  return (
    <div ref={ref} className="w-full">
      <motion.section
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3 }}
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <div className="z-10 flex items-center justify-center">
          <div className="flex flex-col gap-4">
            <h5 className="text-5xl font-bold text-white my-2">
              Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md text-sm">
              {" "}
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={email}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                value={subject}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.9 }}
              className=" block px-1 py-1 w-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800  rounded-lg bg-transparent  text-white  mt-3 lg:mt-0"
            >
              <span className=" w-full block bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 hover:bg-slate-800 rounded-lg px-5 py-2">
                Send Message
              </span>
            </motion.button>

            <Snackbar
              open={emailSubmitted}
              autoHideDuration={6000}
              onClose={() => setEmailSubmitted(false)}
              message="Email sent successfully!"
              severity="success"
            />
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default EmailSection;
