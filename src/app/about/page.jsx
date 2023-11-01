'use client';

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Me from "../../../public/thecephas.jpg";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiEmail } from "@mdi/js";
import { motion, useScroll } from "framer-motion";

export default function About(){

  const { scrollYProgress } = useScroll();

    return (
      <div className="min-h-screen bg-[#000301] bg-blackorchid font-cantarella">
        <Navbar />
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="bg-green-400 z-50 fixed top-0 left-0 right-0 h-1 transform origin-[0%]"
        />
        <main className="px-8 lg:px-[100px] pt-20">
          <section className="flex flex-col lg:flex-row-reverse lg:justify-between">
            <div>
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
              <h1 className="font-cantarella leading-10 text-3xl font-bold lg:w-[600px]">
                I&apos;m Osho Iseoluwa. I live and school in Lagos, where I
                build projects and learn.
              </h1>
              <div className="text-white/50 pt-8">
                <p className="leading-7 pb-6 text-[14.8px] font-inter">
                  I am a self-driven, innovative, young, and creative individual
                  with keen interest to learning, building stuffs, and solving
                  problems.
                </p>
                <p className="leading-7 pb-6 text-[14.8px] font-inter">
                  Personally, I love building stuffs, constructing technical
                  solutions to problems, and connecting with minds better and
                  more advanced than mine. So yeah, it is suffice to say that I
                  love networking.
                </p>
                <p className="leading-7 pb-6 text-[14.8px] font-inter">
                  My usual programing language is JavaScript, however, I have
                  started learning Python as a backend language. So far,
                  learning Python has been so fun and quite intriguing for me
                  having to learn a completely different language! 🎉
                </p>
                <p className="leading-7 pb-6 text-[14.8px] font-inter">
                  Aside learning Python, I am also still improving my JavaScript
                  skills in building projects using JavaScript and also
                  TypeScript sometimes.
                </p>
              </div>
              <div>
                <h2 className="font-cantarella leading-10 pt-5 text-3xl font-bold lg:w-[600px]">
                  Soft Skills
                </h2>
                <ul className="list-disc px-6 pt-6">
                  <li>Good Communicator: I tend to be a good communicator amongst teams and have a good 
                    ability to pay attention to details.
                  </li>
                  <li>Team Player: A team player wh</li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div>
                <h3>Technologies</h3>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
}