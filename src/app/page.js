"use client";

import { motion, useScroll } from "framer-motion";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Footer from "./components/footer";
import Workexperience from "./components/workexperience";
import Projects from "./components/projects";
import Skillsnservices from "./components/skillsnservices";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main
      // className="min-h-screen scroll-ms-72 relative bg-[#000301] bg-blackorchid"
      style={{ scrollBehavior: "smooth" }}
      className="min-h-screen relative bg-[#040d12] bg-blackorchid"
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-[#5C8374] z-50 fixed top-0 left-0 right-0 h-1 transform origin-[0%]"
      />
      <Navbar />
      <Herosection />
      <Skillsnservices />
      <Projects />
      <Workexperience />
      <Footer />
    </main>
  );
}
