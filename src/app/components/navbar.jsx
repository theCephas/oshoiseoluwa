"use client";

import Link from "next/link";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

export default function Navbar() {
  return (
    <nav className="py-3 px-6 lg:px-15 border-b border-white/30 sticky top-0 z-30 backdrop-blur-md">
      <header className="flex items-center justify-between max-w-[1440px] mx-auto">
        <Link
          href="/"
          className="font-bold relative z-10 text-[16px] sm:text-2xl text-white panchang"
        >
          the<span className="text-[#5C8374]">Cephas</span>⚡
        </Link>

        <a
          href="https://github.com/theCephas"
          target="_blank"
          className="flex gap-1 items-center panchang text-white/40 mt-1 text-[16px] sm:text-[20px]"
        >
          <Icon
            path={mdiGithub}
            size={1.2}
            className="inline mr-[1px] text-white/40 hover:text-green-400 duration-500"
          />
          gitHub
        </a>
      </header>
    </nav>
  );
}
