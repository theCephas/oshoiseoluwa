import React from "react";
import Hng from "../../../public/hng.webp";
import Drycode from "../../../public/drycode.webp";
import Ilead from "../../../public/ilead.webp";
import Image from "next/image";
import Html from "../../../public/html.svg";
import Css from "../../../public/css.svg";
import Js from "../../../public/js.svg";
import REACT from "../../../public/react.svg";
import Sass from "../../../public/sass.svg";
import Tailwind from "../../../public/tailwind.svg";
import Next from "../../../public/nextjs.svg";
import Git from "../../../public/git.svg";
import Ts from "../../../public/ts.svg";
import Astro from "../../../public/astro.svg";
import Github from "../../../public/github.svg";

const Workexperience = () => {
  const Skills = [
    {
      id: 1,
      skill: "HTML",
      image: Html,
    },
    {
      id: 2,
      skill: "CSS",
      image: Css,
    },
    {
      id: 3,
      skill: "JavaScript",
      image: Js,
    },
    {
      id: 4,
      skill: "TypeScript",
      image: Ts,
    },
    {
      id: 5,
      skill: "Tailwind",
      image: Tailwind,
    },
    {
      id: 6,
      skill: "Sass",
      image: Sass,
    },
    {
      id: 7,
      skill: "React",
      image: REACT,
    },
    {
      id: 8,
      skill: "Nextjs",
      image: Next,
    },
    {
      id: 9,
      skill: "Git",
      image: Git,
    },
    {
      id: 10,
      skill: "Github",
      image: Github,
    },
    {
      id: 11,
      skill: "Astro",
      image: Astro,
    },
  ];

  return (
    <div className="px-6 lg:px-15">
      <section className="flex flex-col justify-between gap-4 lg:flex-row-reverse max-w-[1440px] mx-auto">
        <div>
          <h1
            data-aos="zoom-in"
            data-aos-duration="700"
            className="panchang font-bold pt-[100px] pb-20 text-white text-2xl sm:text-3xl"
          >
            Skills 👨‍💻
          </h1>
          <div className="grid grid-cols-2 gap-4">
            {Skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center sm:h-[70px] md:w-[300px] gap-4 p-4 group border border-white/40 hover:border-white transform hover:scale-95 text-white"
              >
                <Image
                  src={skill.image}
                  width={20}
                  height={20}
                  alt={skill.skill}
                />
                <p className="group-hover:text-white text-white/50 text-[14px]">
                  {skill.skill}
                </p>
              </div>
            ))}
            <div className="flex items-center  sm:h-[70px] md:w-[300px] gap-4 px-10 p-4 group border border-white/40 hover:border-white transform hover:scale-95 text-white">
              <p className="group-hover:text-white text-white/50 text-[20px]">
                ...
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1
            data-aos="zoom-in"
            data-aos-duration="700"
            className="panchang font-bold pt-[100px] pb-20 text-white text-2xl sm:text-3xl"
          >
            Work Experience 👨‍💻
          </h1>

          <div className="container relative">
            <div className="absolute w-1 z-0 h-full bg-white/10 shadow-md left-[40px] inset-0"></div>
            <div className="relative z-10 lg:w-[600px]">
              <Image
                src={Ilead}
                alt="Ilead Logo"
                width={80}
                height={80}
                className="rounded-sm object-cover shadow-md border-1 
              border-white bg-white/20 backdrop-blur-md p-4 xs:absolute"
              />
              <div className="relative pt-2 xs:pl-[120px] xs:pt-0">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 left-[34px] h-4 w-4 transform 
                rotate-45 bg-white/30 backdrop-blur-md xs:top-8 xs:left-[112px]"
                ></div>
                <div className="text-white font-cantarella bg-white/30 backdrop-blur-md rounded-xl p-4">
                  <p className=" font-[600]">iLead Consult Africa</p>
                  <p className="text-[12px] font-[500] ">Content Writer</p>
                  <p className="text-white/50 tracking-wide">
                    AUG 2022 - FEB 2023
                  </p>
                  <p className="text-white text-[14px] pt-4">
                    Constructed blog posts for the company in order to
                    facilitate and direct clients into the company in order to
                    show and prove the organisation&apos;s worth.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-10 py-10 lg:w-[600px]">
              <Image
                src={Drycode}
                alt="Drycode Logo"
                width={80}
                height={80}
                className="rounded-sm object-cover shadow-md border-1 
              border-white bg-white/20 backdrop-blur-md p-4 xs:absolute"
              />
              <div className="relative pt-2 xs:pl-[120px] xs:pt-0">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 left-[34px] h-4 w-4 transform 
                rotate-45 bg-white/30 backdrop-blur-md xs:top-8 xs:left-[112px]"
                ></div>
                <div className="text-white font-cantarella bg-white/30 backdrop-blur-md rounded-xl p-4">
                  <p className=" font-[600]">Drycode Organization</p>
                  <p className="text-[12px] font-[500] ">
                    Frontend Developer Intern
                  </p>
                  <p className="text-white/50 tracking-wide">
                    July 2023 - August 2023
                  </p>
                  <p className="text-white text-[14px] pt-4">
                    Constructed a responsive web application utilising 90%
                    Reactjs and 100% tailwind css, ensuring optimal performance,
                    seamless user experience, and zero traffic issues.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos-duration="700" className="relative z-10 lg:w-[600px]">
              <Image
                src={Hng}
                alt="HNG Logo"
                width={80}
                height={80}
                className="rounded-sm object-cover shadow-md border-1 
              border-white bg-white/20 backdrop-blur-md p-4 xs:absolute"
              />
              <div className="relative pt-2 xs:pl-[120px] xs:pt-0">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 left-[34px] h-4 w-4 transform 
                rotate-45 bg-white/30 backdrop-blur-md xs:top-8 xs:left-[112px]"
                ></div>
                <div className="text-white font-cantarella bg-white/30 backdrop-blur-md rounded-xl p-4">
                  <p className=" font-[600]">HNGx Internship</p>
                  <p className="text-[12px] font-[500] ">
                    Frontend Developer Intern
                  </p>
                  <p className="text-white/50 tracking-wide">
                    SEPT 2023 - OCTOBER 2023
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
        </div>
      </section>
    </div>
  );
};

export default Workexperience;
