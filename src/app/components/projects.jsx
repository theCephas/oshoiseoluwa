"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Icon from "@mdi/react";
import { mdiArrowTopRight, mdiGithub, mdiEye, mdiStar } from "@mdi/js";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const Projects = [
    {
      id: 1,
      name: "The Advertisers",
      category: "Ecommerce Application",
      stack: ["React.js", "TypeScript", "Tailwind CSS"],
      about: "Ecommerce platform for users and vendors",
      description:
        "A full-featured ecommerce application with user authentication, product listings, shopping cart, and vendor management.",
      link: "https://www.the-advertisers.com/",
      github: "https://github.com/Israel001/the-advertisers",
      image: "/projects/softascore.jpg", // You'll need to add this
      featured: true,
      status: "Live",
    },
    {
      id: 2,
      name: "Softascore Platform",
      category: "Web Application",
      stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      about: "Advanced scoring and analytics platform",
      description:
        "A comprehensive web application for sports scoring and analytics with real-time data processing and interactive dashboards.",
      link: "https://www.softascore.com/",
      github: null, // Private repository
      image: "/projects/softascore.jpg", // You'll need to add this
      featured: true,
      status: "Live",
    },
    {
      id: 3,
      name: "MovieBox",
      category: "Entertainment",
      stack: ["React.js", "Vite", "TMDB API", "Tailwind CSS"],
      about: "Modern movie discovery platform",
      description:
        "A sleek movie discovery app with search functionality, detailed movie information, and personalized recommendations.",
      link: "https://tc-moviebox.vercel.app/",
      github: "https://github.com/theCephas/moviebox",
      image: "/projects/moviebox.jpg",
      featured: true,
      status: "Live",
    },
    {
      id: 4,
      name: "QuickQuizze",
      category: "Education",
      stack: ["React.js", "Trivia API", "Tailwind CSS"],
      about: "Interactive quiz application",
      description:
        "An engaging quiz platform with multiple categories, difficulty levels, and real-time scoring system.",
      link: "https://quick-quizze.vercel.app/",
      github: "https://github.com/theCephas/quickquizze",
      image: "/projects/quiz.jpg",
      featured: false,
      status: "Live",
    },
    {
      id: 4,
      name: "BankistClone",
      category: "Finance",
      stack: ["jQuery", "Flowbite", "Tailwind CSS", "HTML5"],
      about: "Modern banking interface clone",
      description:
        "A pixel-perfect recreation of a modern banking app interface with smooth animations and responsive design.",
      link: "https://bankist-clone.vercel.app/",
      github: "https://github.com/theCephas/bankist-clone",
      image: "/projects/bankist.jpg",
      featured: false,
      status: "Live",
    },
    {
      id: 5,
      name: "QR Code Generator",
      category: "Utility",
      stack: ["React.js", "QR.js", "Tailwind CSS"],
      about: "Scannable QR code generator",
      description:
        "A simple yet powerful tool for generating customizable QR codes with download functionality.",
      link: "https://i-qr-code-gen.vercel.app/",
      github: "https://github.com/theCephas/qr-generator",
      image: "/projects/qr.jpg",
      featured: false,
      status: "Live",
    },
    {
      id: 6,
      name: "Mother and Child Health Foundation",
      category: "Voluntary Service",
      stack: ["React", "Tailwind CSS", "AOS"],
      about: "A voluntarily built website for MCHF",
      description:
        "A responsive and visually appealing website for the Mother and Child Health Foundation, built to enhance their online presence and outreach.",
      link: "https://motherandchildhealthproject.com",
      github: null,
      image: "/projects/portfolio.jpg",
      featured: true,
      status: "Live",
    },
  ];

  const featuredProjects = Projects.filter((project) => project.featured);
  const otherProjects = Projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="panchang text-4xl lg:text-5xl font-bold text-white mb-4">
            Selected Projects <span className="text-[#5C8374]">🚀</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto font-cantarella">
            A curated set of work highlighting performance and UX
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                // data-aos-delay={index * 100}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#5C8374]/50 transition-all duration-500"
              >
                {/* Project Image/Preview */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-[#5C8374]/20 to-[#93B1A6]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {project.category === "Web Application"
                        ? "🌐"
                        : project.category === "Entertainment"
                        ? "🎬"
                        : "💻"}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                      {project.status}
                    </span>
                  </div>

                  {/* Featured badge */}
                  <div className="absolute top-4 right-4">
                    <Icon path={mdiStar} size={1} className="text-yellow-400" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white text-xl font-bold panchang mb-1">
                        {project.name}
                      </h3>
                      <span className="text-[#5C8374] text-sm font-medium">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 text-white/70 hover:text-[#5C8374] hover:bg-white/20 transition-all duration-300"
                        title="View Live"
                      >
                        <Icon path={mdiEye} size={0.9} />
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/10 text-white/70 hover:text-[#5C8374] hover:bg-white/20 transition-all duration-300"
                          title="View Code"
                        >
                          <Icon path={mdiGithub} size={0.9} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#5C8374]/20 text-[#5C8374] text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white/70 hover:text-[#5C8374] transition-colors duration-300 text-sm font-medium"
                  >
                    View Project
                    <Icon path={mdiArrowTopRight} size={0.8} className="ml-1" />
                  </a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5C8374]/0 to-[#5C8374]/0 group-hover:from-[#5C8374]/5 group-hover:to-[#93B1A6]/5 transition-all duration-500 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3
            data-aos="fade-up"
            className="text-2xl font-bold text-white mb-8 panchang"
          >
            Other Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                // data-aos-delay={index * 100}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#5C8374]/50 transition-all duration-500 p-6"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">
                      {project.name}
                    </h4>
                    <span className="text-[#5C8374] text-sm">
                      {project.about}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-[#5C8374] transition-colors duration-300"
                    >
                      <Icon path={mdiArrowTopRight} size={0.9} />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-[#5C8374] transition-colors duration-300"
                      >
                        <Icon path={mdiGithub} size={0.9} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5C8374]/0 to-[#5C8374]/0 group-hover:from-[#5C8374]/5 group-hover:to-[#93B1A6]/5 transition-all duration-500 rounded-xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* View More Projects CTA */}
        <div data-aos="fade-up" className="text-center mt-16">
          <a
            href="https://github.com/theCephas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#5C8374] text-white font-semibold rounded-xl hover:bg-[#5C8374]/90 transition-all duration-300 hover:scale-105"
          >
            <Icon path={mdiGithub} size={1} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
