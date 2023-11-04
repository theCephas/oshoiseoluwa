'use client';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Me from "../../../public/thecephas.jpg";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiEmail } from "@mdi/js";
import { motion, useScroll, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import "../styles.css";
import React from "../../../public/react.svg";
import Tailwind from "../../../public/tailwind.svg";
import Sass from "../../../public/sass.svg";
import Js from "../../../public/js.svg";
import Ts from "../../../public/ts.svg";
import Html from "../../../public/html.svg";
import Css from "../../../public/css.svg";
import Nextjs from "../../../public/nextjs.svg";
import Chrome from "../../../public/chrome.svg";
import Vercel from "../../../public/vercell.svg";
import Git from "../../../public/git.svg";
import Github from "../../../public/github.svg";



export default function About(){

  useEffect(() => {
    AOS.init({});
  }, []);

  const { scrollYProgress } = useScroll();

    return (
      <AnimatePresence>
        <MotionConfig
          transition={{
            type: "spring",
            bounce: 0.25,
          }}
        >
          <div className="min-h-screen bg-[#000301] bg-blackorchid font-cantarella">
            <Navbar />
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="bg-green-400 z-50 fixed top-0 left-0 right-0 h-1 transform origin-[0%]"
            />
            <motion.main className="pt-20 px-8 lg:px-15">
              <section className="flex flex-col lg:flex-row-reverse lg:justify-between max-w-[1024px] mx-auto">
                <div data-aos="zoom-in" data-aos-duration="700">
                  <Image
                    src={Me}
                    width={300}
                    height={300}
                    alt="theCephas"
                    className="rounded-xl"
                  />
                  <a
                    href="https://docs.google.com/document/d/12luzb8w2Mv4b4GJs05LNqh2iGeNFtM7eFaStsE_q6UQ/edit?usp=sharing"
                    target="_blank"
                  >
                    <button className="text-white bg-white/10 w-[300px] mt-2 rounded-sm py-2 hover:border hover:border-white/30">
                      View Résumé
                      <Icon
                        path={mdiOpenInNew}
                        size={0.7}
                        className="inline ml-1"
                      />
                    </button>
                  </a>
                  <a
                    href="mailto:oshoiseoluwa@gmail.com"
                    className="text-white block mt-3 text-[14px] hover:text-green-400 duration-500"
                  >
                    <Icon path={mdiEmail} size={0.7} className="inline mr-1" />
                    oshoiseoluwa@gmail.com
                  </a>
                </div>

                <div className="text-white pt-10 lg:pt-0 lg:w-[600px]">
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="700"
                    className="font-cantarella leading-10 text-3xl font-bold lg:w-[600px]"
                  >
                    I&apos;m Osho Iseoluwa. I live and school in Lagos, where I
                    build projects and learn.
                  </h1>
                  <div className="text-white/50 pt-8">
                    <p
                      data-aos="fade-up"
                      data-aos-duration="700"
                      className="leading-7 pb-6 text-[14.8px] font-inter"
                    >
                      I am a self-driven, innovative, young, and creative
                      individual with keen interest to learning, building
                      stuffs, and solving problems.
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="700"
                      className="leading-7 pb-6 text-[14.8px] font-inter"
                    >
                      Personally, I love building stuffs, constructing technical
                      solutions to problems, and connecting with minds better
                      and more advanced than mine. So yeah, it is suffice to say
                      that I love networking.
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="700"
                      className="leading-7 pb-6 text-[14.8px] font-inter"
                    >
                      My usual programing language is JavaScript, however, I
                      have started learning Python as a backend language. So
                      far, learning Python has been so fun and quite intriguing
                      for me having to learn a completely different language! 🎉
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="700"
                      className="leading-7 pb-6 text-[14.8px] font-inter"
                    >
                      Aside learning Python, I am also still improving my
                      JavaScript skills in building projects using JavaScript
                      and also TypeScript sometimes.
                    </p>
                  </div>
                  <div>
                    <h2
                      data-aos="zoom-in"
                      data-aos-duration="700"
                      className="font-cantarella leading-10 pt-5 text-3xl font-bold lg:w-[600px]"
                    >
                      Soft Skills
                    </h2>
                    <ul className="list-disc px-6 pt-6 leading-7 text-[14.8px] font-inter text-white/50">
                      <li data-aos="fade-up" data-aos-duration="700">
                        <span className="font-bold text-white/70">
                          Good Communicator:
                        </span>{" "}
                        I tend to be a good communicator amongst teams and have
                        a good ability to pay attention to details.
                      </li>
                      <li data-aos="fade-up" data-aos-duration="700">
                        <span className="font-bold text-white/70">
                          Team Player:
                        </span>{" "}
                        Effective and efficient in projects related and
                        accompanied with many other individuals.
                      </li>
                      <li data-aos="fade-up" data-aos-duration="700">
                        <span className="font-bold text-white/70">
                          Fast Learner:
                        </span>{" "}
                        I am a quick and fast learner, which aids my ability as
                        part of a team and ability to learn new frameworks and
                        technologies.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3
                      data-aos="zoom-in"
                      data-aos-duration="700"
                      className="font-cantarella leading-10 pt-7 text-3xl font-bold lg:w-[600px]"
                    >
                      Technologies & Tools
                    </h3>

                    <div
                      data-aos="zoom-in"
                      data-aos-duration="900"
                      className="mt-6 grid grid-cols-3 xs:grid-cols-4 gap-6"
                    >
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Js}
                          width={70}
                          height={70}
                          alt="Js Icon"
                          className="absolute m-auto top-0 bottom-0 right-0 left-0 "
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Ts}
                          width={70}
                          height={70}
                          alt="Ts Icon"
                          className="absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={React}
                          width={70}
                          height={70}
                          alt="React Icon"
                          className="rotate absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Tailwind}
                          width={70}
                          height={70}
                          alt="Tailwind Icon"
                          className="rotate absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Nextjs}
                          width={70}
                          height={70}
                          alt="Nextjs Icon"
                          className="rotate absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Html}
                          width={70}
                          height={70}
                          alt="Html Icon"
                          className="rotate absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Css}
                          width={70}
                          height={70}
                          alt="Css Icon"
                          className="rotate absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Git}
                          width={70}
                          height={70}
                          alt="Git Icon"
                          className="rotate absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Github}
                          width={70}
                          height={70}
                          alt="Github Icon"
                          className="rotate absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Chrome}
                          width={70}
                          height={70}
                          alt="Chrome Icon"
                          className="rotate absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Sass}
                          width={70}
                          height={70}
                          alt="Sass Icon"
                          className="rotate absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                      <p className=" bg-white/60 w-[80px] h-[80px] relative">
                        <Image
                          src={Vercel}
                          width={70}
                          height={70}
                          alt="Vercel Icon"
                          className="absolute right-0 left-0 top-0 bottom-0 m-auto"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </motion.main>
            <Footer />
          </div>
        </MotionConfig>
      </AnimatePresence>
    );
}