"use client";

import React from "react";
import Image from "next/image";
import Icon from "@mdi/react";
import {
  mdiHeart,
  mdiGithub,
  mdiLinkedin,
  mdiEmail,
  mdiArrowUp,
} from "@mdi/js";

// Import tech icons
import Nextjs from "../../../public/nextjs.svg";
import Vercel from "../../../public/vercell.svg";
import Tailwind from "../../../public/tailwind.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const techStack = [
    {
      name: "Next.js",
      icon: Nextjs,
      link: "https://nextjs.org/",
    },
    {
      name: "Tailwind CSS",
      icon: Tailwind,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Vercel",
      icon: Vercel,
      link: "https://vercel.com/",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: mdiGithub,
      link: "https://github.com/theCephas",
    },
    {
      name: "LinkedIn",
      icon: mdiLinkedin,
      link: "https://www.linkedin.com/in/osho-iseoluwa",
    },
    {
      name: "Email",
      icon: mdiEmail,
      link: "mailto:oshoiseoluwa@gmail.com",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="font-bold text-2xl text-white panchang mb-3">
                  the<span className="text-[#5C8374]">Cephas</span>
                  <span className="text-yellow-400">⚡</span>
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-md">
                  Frontend Developer & Technical Writer passionate about
                  creating digital experiences that make a difference. Let's
                  build something amazing together.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-[#5C8374] hover:bg-white/20 transition-all duration-300"
                  >
                    <Icon path={social.icon} size={1} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 panchang">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-white/70 hover:text-[#5C8374] transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4 panchang">
                Get In Touch
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:oshoiseoluwa@gmail.com"
                    className="text-white/70 hover:text-[#5C8374] transition-colors duration-300 text-sm"
                  >
                    oshoiseoluwa@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+2348064259826"
                    className="text-white/70 hover:text-[#5C8374] transition-colors duration-300 text-sm"
                  >
                    +234 806 4259 826
                  </a>
                </li>
                <li>
                  <span className="text-white/70 text-sm">
                    Nigeria, West Africa
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Built With */}
            <div className="flex items-center space-x-4">
              {techStack.map((tech, index) => (
                <a
                  key={index}
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/70 hover:text-[#5C8374] transition-colors duration-300 text-sm"
                >
                  <Image
                    src={tech.icon}
                    width={20}
                    height={20}
                    alt={`${tech.name} Icon`}
                  />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-white/30 text-sm">
              &copy; {currentYear} Osho Iseoluwa. All rights reserved.
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-[#5C8374] hover:bg-white/20 transition-all duration-300"
            >
              <Icon path={mdiArrowUp} size={1} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
