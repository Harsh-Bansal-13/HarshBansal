import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import { Bio } from "../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;

function Footer() {
  return (
    <div className="w-full flex justify-center bg-cardOverlay ">
      <div className="w-full max-w-7xl flex flex-col gap-2 items-center p-4 text-text-primary">
        <Link href={"/"} className="mb-8">
          <div className="font-extrabold text-5xl cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800">
            &lt;Harsh Bansal/&gt;
          </div>
        </Link>
        <div className="flex w-full mr-3 items-center justify-center gap-3">
          <Link
            className="text-white no-underline text-lg transition-colors duration-200 ease-in-out hover:text-blue-400 md:text-base"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-white no-underline text-lg transition-colors duration-200 ease-in-out hover:text-blue-400 md:text-base"
            href="#projects"
          >
            Projects
          </Link>
          {/* <NavLink href="#experience">Experience</NavLink> */}
          <Link
            className="text-white no-underline text-lg transition-colors duration-200 ease-in-out hover:text-blue-400 md:text-base"
            href="#profiles"
          >
            Profile
          </Link>
          <Link
            className="text-white no-underline text-lg transition-colors duration-200 ease-in-out hover:text-blue-400 md:text-base"
            href="#contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex mt-2">
          <Link
            className="inline-block mx-4 text-lg text-slate-200 transition-colors duration-200 ease-in-out hover:text-white"
            href={Bio.twitter}
            target="display"
          >
            <TwitterIcon />
          </Link>
          <Link
            className="inline-block mx-4 text-lg text-slate-200 transition-colors duration-200 ease-in-out hover:text-white"
            href={Bio.linkedin}
            target="display"
          >
            <LinkedInIcon />
          </Link>
          <Link
            className="inline-block mx-4 text-lg text-slate-200 transition-colors duration-200 ease-in-out hover:text-white"
            href={Bio.github}
            target="display"
          >
            <GithubIcon />
          </Link>
          <Link
            className="inline-block mx-4 text-lg text-slate-200 transition-colors duration-200 ease-in-out hover:text-white"
            href={Bio.mail}
            target="display"
          >
            <MailIcon />
          </Link>
        </div>
        <div className="text-white mt-10">
          &copy; 2024 Harsh Bansal. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
