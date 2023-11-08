import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from "react";
import Collage from "../../../public/projects/collage.webp"
import Image from "next/image";
import Link from "next/link";
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';

const Projectslide = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    smooth: true,
    offset: ["0 1", "0.2"],
    });

  return (
    <section ref={ref} className="px-8 lg:px-15 ">
      <div className=" max-w-[1024px] mx-auto">
        <h1
          data-aos="zoom-in"
          data-aos-duration="700"
          className="font-inter font-bold text-center pt-[100px] pb-20 text-white text-3xl"
        >
          My Projects
        </h1>
        <motion.section
          style={{
            scale: scrollYProgress,
            }}
          className="relative"
        >
          <Image
            src={Collage}
            alt="Collage Logo"
            width={500}
            className="m-auto w-[300px] sm:w-[500px] rounded-sm"
          />

          <Link href="/">
            <motion.p
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(255, 255, 255, 0.2)",
              }}
              className="text-white/80 text-[12px] font-inter absolute top-[50%] left-[40%] sm:left-[45%] text-center backdrop-blur-lg p-2 px-4 rounded-md"
            >
              Explore
              <Icon path={mdiOpenInNew} size={0.6} className="inline ml-1 mb-1" />
            </motion.p>
          </Link>
        </motion.section>
      </div>
    </section>
  );
}

export default Projectslide
