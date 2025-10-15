"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiGithub, mdiMenu, mdiClose } from "@mdi/js";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const navItems = [
  //   { name: "About", href: "#about" },
  //   { name: "Skills", href: "#skills" },
  //   { name: "Projects", href: "#projects" },
  //   { name: "Contact", href: "#contact" },
  // ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 overflow-hidden z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/20 backdrop-blur-md " : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="font-bold relative z-10 text-xl text-white panchang group"
            >
              the
              <span className="text-[#5C8374] group-hover:text-[#93B1A6] transition-colors duration-300">
                Cephas
              </span>
              <span className="text-yellow-400 group-hover:animate-bounce">
                ⚡
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              <a
                href="https://github.com/theCephas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 font-cantarella text-white/70 hover:text-[#5C8374] transition-colors duration-300 text-sm font-medium"
              >
                <Icon path={mdiGithub} size={1} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
