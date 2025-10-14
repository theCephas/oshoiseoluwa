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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
            <div className="hidden md:flex items-center space-x-8">
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

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/70 hover:text-white transition-colors duration-300"
            >
              <Icon path={isMobileMenuOpen ? mdiClose : mdiMenu} size={1.2} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {/* {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/70 hover:text-[#5C8374] transition-colors duration-300 text-sm font-medium py-2"
                >
                  {item.name}
                </a>
              ))} */}

              <a
                href="https://github.com/theCephas"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-white/70 hover:text-[#5C8374] transition-colors duration-300 text-sm font-medium py-2"
              >
                <Icon path={mdiGithub} size={1} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
