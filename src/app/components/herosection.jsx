"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Iseoluwa from "../../app/osho.png";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiDownload, mdiArrowDown } from "@mdi/js";

const Herosection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5C8374]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#93B1A6]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between pt-20">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Greeting Badge */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="inline-block mb-8"
            >
              <span className="inline-flex items-center px-4 py-2 bg-[#5C8374]/20 text-[#93B1A6] rounded-full text-sm font-medium border border-[#5C8374]/30 backdrop-blur-sm">
                <span className="animate-wave mr-2">👋</span>
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              className="panchang text-4xl lg:text-6xl font-bold text-white mb-6 leading-7 tracking-widest"
            >
              Frontend Developer
              <span className="text-4xl ml-2">🔥</span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-white/80 text-lg font-cantarella leading-relaxed mb-8 max-w-2xl"
            >
              I'm{" "}
              <span className="text-[#5C8374] font-semibold">
                Osho Iseoluwa
              </span>
              , prefers to be called{" "}
              <span className="text-[#93B1A6] font-semibold">"theCephas"</span>{" "}
              though. An experienced frontend developer passionate about
              learning, writing, documenting, and building projects that benefit
              developers and the world at large.
            </p>

            {/* Stats Grid */}
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[#5C8374] panchang">
                  2+
                </div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[#5C8374] panchang">
                  10+
                </div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="/Iseoluwa_Osho_CV.pdf"
                download
                className="group inline-flex items-center justify-center px-6 py-3 bg-[#5C8374] text-white font-semibold rounded-xl hover:bg-[#5C8374]/90 transition-all duration-300 hover:scale-105"
              >
                <Icon
                  path={mdiDownload}
                  size={0.9}
                  className="mr-2 group-hover:animate-bounce"
                />
                Download CV
              </a>
              <button
                onClick={scrollToSection}
                className="inline-flex items-center justify-center px-6 py-3 border border-[#5C8374] text-[#5C8374] font-semibold rounded-xl hover:bg-[#5C8374] hover:text-white transition-all duration-300"
              >
                View My Work
                <Icon path={mdiArrowDown} size={0.9} className="ml-2" />
              </button>
            </div>

            {/* Social Links */}
            <div
              data-aos="fade-up"
              data-aos-delay="1200"
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
              <a
                href="https://github.com/theCephas"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-white/70 hover:text-[#5C8374] transition-all duration-300"
              >
                <Icon
                  path={mdiGithub}
                  size={1}
                  className="mr-2 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/osho-iseoluwa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-white/70 hover:text-[#5C8374] transition-all duration-300"
              >
                <Icon
                  path={mdiLinkedin}
                  size={1}
                  className="mr-2 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/OshoIseoluwa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-white/70 hover:text-[#5C8374] transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                  className="mr-2 fill-current group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                </svg>
                <span className="text-sm">Twitter</span>
              </a>
              {/* <a
                href="https://devcephas.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-white/70 hover:text-[#5C8374] transition-all duration-300"
              >
                <Icon
                  path={mdiOpenInNew}
                  size={1}
                  className="mr-2 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm">Blog</span>
              </a> */}
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            data-aos="zoom-in"
            data-aos-delay="800"
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#5C8374] to-[#93B1A6] rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

              {/* Image container */}
              <div className="relative">
                <div className="relative border-4 border-[#5C8374] rounded-2xl overflow-hidden w-[300px] sm:w-[400px] lg:w-[450px] transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={Iseoluwa}
                    width={450}
                    height={600}
                    alt="Osho Iseoluwa - Frontend Developer"
                    className="w-full h-auto object-cover"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#5C8374]/20 rounded-full blur-xl animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#93B1A6]/20 rounded-full blur-xl animate-bounce delay-1000" />
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-sm mb-2 font-cantarella">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#5C8374] rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-wave {
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Herosection;
