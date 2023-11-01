'use client'

import Icon from "@mdi/react";
import Navbar from "./components/navbar"
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiOpenInNew } from "@mdi/js";
import Me from "../../public/thecephas.jpg";
import Hng from "../../public/hng.webp";
import Drycode from "../../public/drycode.webp";
import Ilead from "../../public/ilead.webp";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";
import { motion, useScroll } from "framer-motion";

export default function Home() {

  const { scrollYProgress } = useScroll();

  return (
    <main className="min-h-screen bg-[#000301] bg-blackorchid">
      <Navbar />
      <motion.div
      style={{ scaleX: scrollYProgress }}
      className="bg-green-400 z-50 fixed top-0 left-0 right-0 h-1 transform origin-[0%]"
      />

      <section className="flex flex-col lg:flex-row justify-between text-white font-inter pt-[129px] px-8 lg:px-[100px]">
        <div>
          <h1 className="font-cantarella leading-10 text-3xl sm:w-[300px] lg:text-5xl font-bold lg:w-[600px]">
            Frontend Developer & Technical Writer
          </h1>
          <p className="py-8 text-[14px] leading-6 sm:w-[500px] lg:w-[600px] text-white/50">
            I&apos;m Osho Iseoluwa, prefers to be called &quot;theCephas&quot;
            though. An experienced frontend developer passionate about learning,
            writing, documenting, and building projects that is beneficial to
            developers and the world at large.
          </p>
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
        {/* <Image
          src={Me}
          width={300}
          height={300}
          alt="theCephas"
          className="mt-8 lg:mt-0 rounded-md bg-white"
        /> */}
      </section>

      <section>
        <h1 className="font-inter font-bold pt-[180px] pb-20 px-8 lg:px-[100px] text-white text-3xl">
          Work Experience
        </h1>

        <div className="container relative px-8 lg:px-[100px]">
          <div className="absolute w-1 z-0 h-full bg-white/10 shadow-md left-[70px] inset-0 md:mx-auto md:right-0 md:left-0"></div>
          <div className="relative z-10">
            <Image
              src={Ilead}
              alt="Ilead Logo"
              width={80}
              height={80}
              className="rounded-sm object-cover shadow-md border-1 
              border-white bg-white/20 backdrop-blur-md p-4 xs:absolute md:mx-auto md:left-0 md:right-0"
            />
            <div className="relative pt-2 xs:pl-[120px] xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 left-[34px] h-4 w-4 transform 
                rotate-45 bg-white/30 backdrop-blur-md xs:top-8 xs:left-[112px] md:left-14"
              ></div>
              <div className="text-white font-cantarella bg-white/30 backdrop-blur-md rounded-xl p-4">
                <p className="">iLead Consult Africa</p>
                <p className="text-[14px]">Content Writer</p>
                <p className="text-white/50 tracking-wide">
                  AUG 2022 - FEB 2023
                </p>
                <p className="text-white text-[14px] pt-4">
                  Constructed blog posts for the company in order to facilitate
                  and direct clients into the company in order to show and prove
                  the organisation&apos;s worth.
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10 py-10">
            <Image
              src={Drycode}
              alt="Drycode Logo"
              width={80}
              height={80}
              className="rounded-sm object-cover shadow-md border-1 
              border-white bg-white/20 backdrop-blur-md p-4 xs:absolute md:mx-auto md:left-0 md:right-0"
            />
            <div className="relative pt-2 xs:pl-[120px] xs:pt-0 md:w-1/2 md:ml-0 md:mr-auto md:pl-0 md:pr-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 left-[34px] h-4 w-4 transform 
                rotate-45 bg-white/30 backdrop-blur-md xs:top-8 xs:left-[112px] md:left-auto md:right-14"
              ></div>
              <div className="text-white font-cantarella bg-white/30 backdrop-blur-md rounded-xl p-4">
                <p className="">Drycode Organization</p>
                <p className="text-[14px]">Frontend Developer Intern</p>
                <p className="text-white/50 tracking-wide">
                  July 2023 - August 2023
                </p>
                <p className="text-white text-[14px] pt-4">
                  Constructed a responsive web application utilising 90% Reactjs
                  and 100% tailwind css, ensuring optimal performance, seamless
                  user experience, and zero traffic issues.
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <Image
              src={Hng}
              alt="HNG Logo"
              width={80}
              height={80}
              className="rounded-sm object-cover shadow-md border-1 
              border-white bg-white/20 backdrop-blur-md p-4 xs:absolute md:mx-auto md:left-0 md:right-0"
            />
            <div className="relative pt-2 xs:pl-[120px] xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 left-[34px] h-4 w-4 transform 
                rotate-45 bg-white/30 backdrop-blur-md xs:top-8 xs:left-[112px] md:left-14"
              ></div>
              <div className="text-white font-cantarella bg-white/30 backdrop-blur-md rounded-xl p-4">
                <p className="">HNGx Internship</p>
                <p className="text-[14px]">Frontend Developer Intern</p>
                <p className="text-white/50 tracking-wide">
                  SEPT 2022 - OCTOBER 2023
                </p>
                <p className="text-white text-[14px] pt-4">
                  Excelled in a challenging, high-pressure environment that
                  encouraged me to surpass my limits. This experience led to
                  significant personal and professional growth, enhancing my
                  skills and adaptability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}