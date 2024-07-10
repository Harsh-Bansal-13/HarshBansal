"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import CodingProfile from "./components/CodingProfile";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { useState } from "react";
export default function Home() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 ">
      <Cursor></Cursor>
      <Navbar />
      <div className="mx-auto w-full p-8 container lg:px-16 mt-20">
        <HeroSection />
        <AboutSection />
        <ProjectSection openModal={openModal} setOpenModal={setOpenModal} />
        <CodingProfile></CodingProfile>
        <EmailSection></EmailSection>
        <Footer></Footer>
      </div>
    </main>
  );
}
