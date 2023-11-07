'use client';

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import React from 'react'
import { motion, useScroll, useAnimation, useInView } from "framer-motion";
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiOpenInNew } from "@mdi/js";
import Link from "next/link";


const Herosection = () => {


    const svgVariants = {
      hidden: { opacity: 0, y: 75 },
      visible: {
        opacity: 1,
        y: 0
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
      AOS.init({  });
    }, []);

  return (
    <div className=" px-8 lg:px-15">
      <section className="flex flex-col lg:flex-row justify-between text-white font-inter pt-[110px] max-w-[1024px] mx-auto">
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
            className="py-8 text-[14px] leading-6 sm:w-[500px] lg:w-[600px] text-white/50"
          >
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
              data-aos="zoom-in"
              data-aos-duration="700"
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
              data-aos="zoom-in"
              data-aos-duration="500"
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
              data-aos="zoom-in"
              data-aos-duration="300"
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
              data-aos="zoom-in"
              data-aos-duration="100"
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
        <div
          className="lg:mt-[-90px]"
          data-aos="zoom-in"
        >
          <motion.svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
            }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            className="w-[300px] sm:w-[500px] lg:w-[400px] h-auto fill-none"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <g>
              <motion.path
                variants={pathVariants}
                className=" stroke-white/40"
                d="M 44.5,14.5 C 53.0892,13.3278 59.9225,15.9945 65,22.5C 66.7774,26.268 67.9441,30.268 68.5,34.5C 67.6671,36.4998 67.8338,38.1665 69,39.5C 69.6667,41.8333 69.6667,44.1667 69,46.5C 67.5412,54.3752 63.7078,60.8752 57.5,66C 61.5098,68.5654 65.8431,70.5654 70.5,72C 75.0631,74.9589 77.0631,79.1256 76.5,84.5C 58.5,84.5 40.5,84.5 22.5,84.5C 21.9369,79.1256 23.9369,74.9589 28.5,72C 33.1569,70.5654 37.4902,68.5654 41.5,66C 35.2922,60.8752 31.4588,54.3752 30,46.5C 30.0005,42.4216 29.8339,38.4216 29.5,34.5C 30.0559,30.268 31.2226,26.268 33,22.5C 34.5848,21.6243 35.5848,20.2909 36,18.5C 38.778,16.8477 41.6114,15.5143 44.5,14.5 Z M 45.5,16.5 C 50.7624,16.4009 55.7624,17.4009 60.5,19.5C 61.9534,22.4068 63.4534,25.4068 65,28.5C 66.2759,31.3663 66.4426,34.1997 65.5,37C 65.1667,37.1667 64.8333,37.3333 64.5,37.5C 63.7019,33.134 62.3686,28.9673 60.5,25C 53.1667,23 45.8333,23 38.5,25C 36.074,28.8012 35.074,32.9679 35.5,37.5C 33.0523,37.9153 31.7189,36.9153 31.5,34.5C 33.0569,29.2183 35.0569,24.2183 37.5,19.5C 40.2097,18.4942 42.8763,17.4942 45.5,16.5 Z M 48.5,24.5 C 52.3224,24.9693 55.989,25.9693 59.5,27.5C 61.0267,30.6596 61.6933,33.993 61.5,37.5C 58.1501,37.335 54.8168,37.5017 51.5,38C 50.1667,41.3333 48.8333,41.3333 47.5,38C 44.1832,37.5017 40.8499,37.335 37.5,37.5C 37.3067,33.993 37.9733,30.6596 39.5,27.5C 42.5046,26.1823 45.5046,25.1823 48.5,24.5 Z M 37.5,39.5 C 38.5,39.5 39.5,39.5 40.5,39.5C 40.5,41.1667 40.5,42.8333 40.5,44.5C 41.8333,44.5 43.1667,44.5 44.5,44.5C 44.3398,42.8008 44.5065,41.1341 45,39.5C 48.3299,46.51 46.1633,49.01 38.5,47C 37.0617,44.4852 36.7284,41.9852 37.5,39.5 Z M 53.5,39.5 C 54.4511,40.9187 54.7845,42.5853 54.5,44.5C 55.8333,44.5 57.1667,44.5 58.5,44.5C 58.5,42.8333 58.5,41.1667 58.5,39.5C 60.3588,39.4609 61.6921,40.2942 62.5,42C 61.7734,43.3988 61.2734,44.8988 61,46.5C 53.4244,49.4228 50.9244,47.0895 53.5,39.5 Z M 32.5,41.5 C 33.4959,41.4142 34.3292,41.7476 35,42.5C 34.7065,47.54 37.0398,49.8733 42,49.5C 46.8682,49.8007 49.3682,47.4674 49.5,42.5C 49.6318,47.4674 52.1318,49.8007 57,49.5C 62.1276,49.7058 64.6276,47.2058 64.5,42C 65.6001,41.5683 66.2668,42.0683 66.5,43.5C 65.5276,51.4875 61.8609,57.9875 55.5,63C 51.5,65 47.5,65 43.5,63C 36.8703,57.3348 33.2036,50.1681 32.5,41.5 Z M 43.5,65.5 C 47.6817,66.4405 51.6817,66.7738 55.5,66.5C 51.0167,69.3533 47.0167,69.02 43.5,65.5 Z M 41.5,69.5 C 43.1667,69.5 44.8333,69.5 46.5,69.5C 46.5,70.8333 46.5,72.1667 46.5,73.5C 44.8333,73.5 43.1667,73.5 41.5,73.5C 41.5,72.1667 41.5,70.8333 41.5,69.5 Z M 52.5,69.5 C 54.1667,69.5 55.8333,69.5 57.5,69.5C 57.5,70.8333 57.5,72.1667 57.5,73.5C 55.8333,73.5 54.1667,73.5 52.5,73.5C 52.5,72.1667 52.5,70.8333 52.5,69.5 Z M 48.5,70.5 C 50.337,70.6395 50.6704,71.3061 49.5,72.5C 48.7025,72.0431 48.3691,71.3764 48.5,70.5 Z M 37.5,71.5 C 38.5,71.5 39.5,71.5 40.5,71.5C 40.5,72.8333 40.5,74.1667 40.5,75.5C 42.5,75.5 44.5,75.5 46.5,75.5C 46.5,77.8333 46.5,80.1667 46.5,82.5C 39.5,82.5 32.5,82.5 25.5,82.5C 25.7811,80.0372 26.7811,77.8705 28.5,76C 31.5919,74.4541 34.5919,72.9541 37.5,71.5 Z M 58.5,71.5 C 62.797,72.146 66.797,73.646 70.5,76C 72.4506,77.7342 73.4506,79.9009 73.5,82.5C 71.1667,82.5 68.8333,82.5 66.5,82.5C 66.5,81.5 66.5,80.5 66.5,79.5C 63.5,79.5 60.5,79.5 57.5,79.5C 57.5,80.5 57.5,81.5 57.5,82.5C 55.8333,82.5 54.1667,82.5 52.5,82.5C 52.5,80.1667 52.5,77.8333 52.5,75.5C 54.5,75.5 56.5,75.5 58.5,75.5C 58.5,74.1667 58.5,72.8333 58.5,71.5 Z M 47.5,74.5 C 48.8333,74.5 50.1667,74.5 51.5,74.5C 51.5,77.1667 51.5,79.8333 51.5,82.5C 50.1667,82.5 48.8333,82.5 47.5,82.5C 47.5,79.8333 47.5,77.1667 47.5,74.5 Z M 58.5,80.5 C 60.924,80.1924 63.2573,80.5258 65.5,81.5C 64.3333,81.8333 63.1667,82.1667 62,82.5C 60.3189,82.3917 59.1522,81.7251 58.5,80.5 Z"
              />
            </g>
            <g>
              <motion.path
                variants={pathVariants}
                className="opacity-[0.442] fill-white/40"
                d="M 38.5,33.5 C 41.5719,33.1826 44.5719,33.5159 47.5,34.5C 46,34.8333 44.5,35.1667 43,35.5C 41.0145,35.4313 39.5145,34.7647 38.5,33.5 Z"
              />
            </g>
            <g>
              <motion.path
                variants={pathVariants}
                className="opacity-[0.445] fill-white/40"
                d="M 51.5,33.5 C 54.5719,33.1826 57.5719,33.5159 60.5,34.5C 59,34.8333 57.5,35.1667 56,35.5C 54.0145,35.4313 52.5145,34.7647 51.5,33.5 Z"
              />
            </g>
            <g>
              <motion.path
                variants={pathVariants}
                className="opacity-[0.436] fill-white/40"
                d="M 46.5,52.5 C 48.604,52.2011 50.604,52.5344 52.5,53.5C 51.5,53.8333 50.5,54.1667 49.5,54.5C 47.9704,54.3601 46.9704,53.6935 46.5,52.5 Z"
              />
            </g>
            <g>
              <motion.path
                variants={pathVariants}
                className="opacity-[0.436] fill-white/40"
                d="M 41.5,56.5 C 46.9144,57.4725 52.2478,57.8058 57.5,57.5C 55.121,59.0419 52.4543,59.7086 49.5,59.5C 47.5,59.3333 45.5,59.1667 43.5,59C 42.244,58.5831 41.5774,57.7498 41.5,56.5 Z"
              />
            </g>
          </motion.svg>
        </div>
      </section>
    </div>
  );
}

export default Herosection
