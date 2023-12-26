"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

import Avatar from "../../../public/avatar.jpg";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiArrowUp, mdiOpenInNew } from "@mdi/js";
import Link from "next/link";

const Herosection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className=" max-w-[1440px] mx-auto px-6 lg:px-15">
      <section className="flex flex-col lg:flex-row md:items-center md:justify-between text-white font-cantarella pt-[60px]">
        <div>
          <h1
            data-aos="zoom-in"
            data-aos-duration="500"
            className="panchang leading-[50px] text-4xl lg:text-5xl font-bold"
          >
            Frontend Developer & Technical Writer 🔥
          </h1>
          <p
            data-aos="zoom-in"
            className="py-8 text-[14px] font-cantarella leading-6 sm:w-[500px] md:w-[400px] lg:w-[600px] text-white/70"
          >
            I&apos;m Osho Iseoluwa, prefers to be called &quot;theCephas&quot;
            though. An experienced frontend developer passionate about learning,
            writing, documenting, and building projects that is beneficial to
            developers and the world at large.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p
              data-aos="zoom-in"
              data-aos-duration="700"
              className="leading-7 pb-6 text-[14.8px] font-cantarella md:w-[300px]"
            >
              I am a self-driven, innovative, young, and creative individual
              with keen interest to learning, building stuffs, and solving
              problems.
            </p>

            <p
              data-aos="zoom-in"
              data-aos-duration="700"
              className="leading-7 pb-6 text-[14.8px] font-cantarella md:w-[300px]"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="17"
                height="17"
                viewBox="0 0 50 50"
                className="inline fill-white/40 mb-[0.8px] mr-[1px] hover:fill-white duration-500"
              >
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>
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
        <div data-aos="zoom-in" className="mt-12 md:mt-0">
          <div className="relative border-4 border-[#93b1a6] w-[300px]">
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
