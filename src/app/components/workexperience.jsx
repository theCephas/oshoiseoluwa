"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiCalendarRange, mdiMapMarker, mdiOpenInNew } from "@mdi/js";

// Skill icons
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
import Link from "next/link";

// Optional: company logos if available in /public
// import UtivaLogo from "../../../public/utiva.webp";
// import FonuLogo from "../../../public/fonu.webp";
// import LinkTechLogo from "../../../public/linktech.webp";
// import HngLogo from "../../../public/hng.webp";

const Workexperience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const Skills = [
    { id: 1, skill: "HTML5", image: Html, proficiency: "Advanced" },
    { id: 2, skill: "CSS3", image: Css, proficiency: "Advanced" },
    { id: 3, skill: "JavaScript", image: Js, proficiency: "Advanced" },
    { id: 4, skill: "TypeScript", image: Ts, proficiency: "Intermediate" },
    { id: 5, skill: "Tailwind CSS", image: Tailwind, proficiency: "Advanced" },
    { id: 6, skill: "Sass/SCSS", image: Sass, proficiency: "Intermediate" },
    { id: 7, skill: "React.js", image: REACT, proficiency: "Advanced" },
    { id: 8, skill: "Next.js", image: Next, proficiency: "Advanced" },
    { id: 9, skill: "Git", image: Git, proficiency: "Advanced" },
    { id: 10, skill: "GitHub", image: Github, proficiency: "Advanced" },
    { id: 11, skill: "Astro", image: Astro, proficiency: "Intermediate" },
  ];

  const WorkExperience = [
    {
      id: 1,
      company: "Utiva",
      position: "Frontend Developer",
      duration: "May 2025 - Present",
      location: "Lagos, Nigeria",
      logo: null, // e.g., UtivaLogo
      description: [
        "Building with React, TypeScript, Zustand for state management, and tailwindcss.",
        "Building internal projects for the company's use.",
        "Working with industry-standard teams to ease product deliveries and create a proper company standard.",
      ],
      website: "https://utiva.io/",
      type: "Full-time",
    },
    {
      id: 2,
      company: "Fonu",
      position: "Frontend Developer",
      duration: "August 2024 - April 2025",
      location: "Lagos, Nigeria",
      logo: null,
      description: [
        "Revamping and restructuring an existing codebase.",
        "Consuming APIs using ReactJS, NextJS, and TypeScript for the population of data.",
        "Building a legacy in the Nigerian telecommunications space.",
      ],
      website: "https://app.fonucx.com/",
      type: "Full-time",
    },
    {
      id: 3,
      company: "Link Technologies",
      position: "Frontend Developer",
      duration: "August 2024 - December 2024",
      location: "USA, Delaware",
      logo: null,
      description: [
        "Enforcing website standards for visual and design integrity using Next.js and TypeScript.",
        "Utilizing APIs to provide data for web applications.",
        "Crafting a real-time dashboard for the quick management of fleets for users. ",
      ],

      type: "Contract",
    },
    {
      id: 4,
      company: "HNG Internship",
      position: "Frontend Developer Intern",
      duration: "September 2023 - October 2023",
      location: "Remote",
      logo: null, // e.g., HngLogo
      description: [
        "Contributed to real-world tasks with React and modern tooling.",
        "Collaborated with distributed teams using Git and agile workflows.",
        "Shipped features under tight timelines and scope.",
      ],
      website: "https://hng.tech/",
      type: "Internship",
    },
  ];

  return (
    <div
      id="experience"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Skills */}
        <section className="mb-28">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="panchang text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical Skills <span className="text-[#5C8374]">💻</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-cantarella">
              Tools and technologies used to craft performant experiences
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {Skills.map((skill) => (
              <div
                key={skill.id}
                data-aos="zoom-in"
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:border-[#5C8374]/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-3 rounded-xl bg-white/10 group-hover:bg-[#5C8374]/15 transition-colors">
                    <Image
                      src={skill.image}
                      alt={skill.skill}
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {skill.skill}
                  </h3>
                  <span className="text-[#5C8374] text-xs font-medium px-2 py-0.5 bg-[#5C8374]/10 rounded-full">
                    {skill.proficiency}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#5C8374]/0 to-[#93B1A6]/0 group-hover:from-[#5C8374]/5 group-hover:to-[#93B1A6]/5 transition-all rounded-2xl" />
              </div>
            ))}
          </div>
        </section>

        {/* Experience timeline */}
        <section>
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="panchang text-4xl lg:text-5xl font-bold text-white mb-4">
              Work Experience <span className="text-[#5C8374]">💼</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-cantarella">
              A concise timeline of roles and impact
            </p>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-[#5C8374] to-[#93B1A6]" />

            {WorkExperience.map((job, index) => {
              const isCurrent = (job.duration || "")
                .toLowerCase()
                .includes("present");
              return (
                <div
                  key={job.id}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className={`relative flex items-center mb-14 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#5C8374] rounded-full border-4 border-black z-10" />

                  {/* card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 hover:border-[#5C8374]/50 transition-all">
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-4">
                          {job.logo && (
                            <div className="w-12 h-12 rounded-xl bg-white/10 p-2 flex items-center justify-center">
                              <Image
                                src={job.logo}
                                width={32}
                                height={32}
                                alt={`${job.company} logo`}
                                className="rounded-lg"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="text-white text-xl font-bold panchang">
                              {job.company}
                            </h3>
                            <p className="text-[#5C8374] font-semibold">
                              {job.position}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {isCurrent && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#5C8374]/20 text-[#5C8374]">
                              Current
                            </span>
                          )}
                          {job.website && (
                            <Link
                              href={job.website}
                              target="_blank"
                              // rel="noopener noreferrer"
                              aria-label={`${job.company} website`}
                              className="text-white/60 hover:text-[#5C8374] transition-colors cursor-pointer"
                            >
                              <Icon path={mdiOpenInNew} size={1} />
                            </Link>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-5">
                        {!!job.duration && (
                          <div className="flex items-center text-white/70 text-sm">
                            <Icon
                              path={mdiCalendarRange}
                              size={0.8}
                              className="mr-2"
                            />
                            {job.duration}
                          </div>
                        )}
                        {!!job.location && (
                          <div className="flex items-center text-white/70 text-sm">
                            <Icon
                              path={mdiMapMarker}
                              size={0.8}
                              className="mr-2"
                            />
                            {job.location}
                          </div>
                        )}
                        <span className="px-3 py-1 bg-[#5C8374]/20 text-[#5C8374] text-xs font-medium rounded-full">
                          {job.type}
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {job.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-white/80 text-sm flex items-start"
                          >
                            <span className="w-2 h-2 bg-[#5C8374] rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="absolute inset-0 bg-gradient-to-br from-[#5C8374]/0 to-[#93B1A6]/0 group-hover:from-[#5C8374]/5 group-hover:to-[#93B1A6]/5 transition-all rounded-2xl" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Workexperience;
