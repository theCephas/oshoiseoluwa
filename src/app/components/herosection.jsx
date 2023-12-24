"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { motion, useScroll, useAnimation, useInView } from "framer-motion";
import Avatar from "../../../public/avatar.jpg";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiOpenInNew } from "@mdi/js";
import Link from "next/link";

const Herosection = () => {
  const svgVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className=" px-6 lg:px-15">
      <section className="flex flex-col md:flex-row md:items-center md:justify-between text-white font-inter pt-[90px] max-w-[1440px] mx-auto">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="font-cantarella leading-10 text-3xl sm:w-[300px] lg:text-5xl font-bold lg:w-[600px]"
          >
            Frontend Developer & Technical Writer
          </h1>
          <p
            data-aos="zoom-in"
            className="py-8 text-[14px] leading-6 sm:w-[500px] md:w-[400px] lg:w-[600px] text-white/70"
          >
            I&apos;m Osho Iseoluwa, prefers to be called &quot;theCephas&quot;
            though. An experienced frontend developer passionate about learning,
            writing, documenting, and building projects that is beneficial to
            developers and the world at large.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="leading-7 pb-6 text-[14.8px] font-inter md:w-[300px]"
            >
              I am a self-driven, innovative, young, and creative individual
              with keen interest to learning, building stuffs, and solving
              problems.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="leading-7 pb-6 text-[14.8px] font-inter md:w-[300px]"
            >
              2+ years experience in crafting unique websites, and generating
              mobile-friendly services.
            </p>
          </div>
          <div className="text-[12px]">
            <a
              href="https://github.com/theCephas"
              target="_blank"
              className="mr-2"
            >
              <Icon
                path={mdiGithub}
                size={0.8}
                className="inline mb-1 mr-[1px] text-white/40 hover:text-white duration-500"
              />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/osho-iseoluwa"
              target="_blank"
              className="mr-2"
            >
              <Icon
                path={mdiLinkedin}
                size={0.8}
                className="inline mb-1 mr-[1px] text-white/40 hover:text-white duration-500"
              />
              LinkedIn
            </a>
            <a
              href="https://twitter.com/OshoIseoluwa"
              target="_blank"
              className="mr-2"
            >
              <Icon
                path={mdiTwitter}
                size={0.8}
                className="inline mb-1 mr-[1px] text-white/40 hover:text-white duration-500"
              />
              Twitter
            </a>
            <a
              href="https://devcephas.hashnode.dev"
              target="_blank"
              className="mr-2"
            >
              <Icon
                path={mdiOpenInNew}
                size={0.8}
                className="inline mb-1 mr-[1px] text-white/40 hover:text-white duration-500"
              />
              Hashnode
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <div className="relative border-4 border-green-400 w-[300px]">
            <Image
              src={Avatar}
              width={300}
              height={300}
              alt="Avatar"
              className="relative top-[-12px] left-[-14px] "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
