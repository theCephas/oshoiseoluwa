"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Footer from "./components/footer";
import Workexperience from "./components/workexperience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      style={{ scrollBehavior: "smooth" }}
      className="min-h-screen relative overflow-hidden bg-[#040d12] bg-blackorchid"
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-[#5C8374] z-50 fixed top-0 left-0 right-0 h-1 transform origin-[0%]"
      />
      <Navbar />
      <Herosection />
      {showArrow && (
        <div className="fixed bottom-[70px] right-[75px] z-50">
          <p className="fixed cursor-pointer" onClick={handleArrowClick}>
            <Icon
              path={mdiArrowUp}
              size={2}
              className="text-white animate-bounce hover:bg-black/40 duration-500 rounded-full p-3 border border-white"
            />
          </p>
        </div>
      )}
      <Projects />
      <Workexperience />
      <Contact />
      <Footer />
    </main>
  );
}
