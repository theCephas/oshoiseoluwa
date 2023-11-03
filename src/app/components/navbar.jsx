'use client'

import About from "../about/page";
import Link from "next/link"
import Icon from "@mdi/react"
import { mdiWhiteBalanceSunny, mdiWeatherNight, mdiAccount, mdiBriefcase, mdiPhone } from "@mdi/js";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";


export default function Navbar(){

  const [mobileNav, toggleMobileNav] = useCycle(false, true);

    return (
      <nav className="py-4 px-8 lg:px-15 border-b border-white/30 sticky top-0 z-30 backdrop-blur-md">
        <header className="flex justify-between max-w-[1024px] mx-auto">
          <Link
            href="/"
            className="font-bold relative z-10 text-3xl text-white font-dancingscript"
          >
            theCephas<span className="text-green-400 text-[70px]">.</span>
          </Link>

          <div className="text-white hidden lg:flex font-cantarella font-bold pt-7">
            <Link
              href="/about"
              className="hover:text-green-400 flex duration-700"
            >
              About
            </Link>
            <Link
              href="/"
              className="px-6 hover:text-green-400 flex duration-700"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-400 flex duration-700"
            >
              Contact
            </Link>
          </div>

          <Icon
            path={mdiWhiteBalanceSunny}
            size={1.5}
            className="cursor-pointer invisible lg:visible transform hover:rotate-45 text-green-400 border-2 p-1 rounded-full border-white mt-5"
          />
          <div className="relative z-10 content lg:hidden">
            <motion.button
              animate={mobileNav ? "open" : "closed"}
              className="flex flex-col space-y-1 mt-7"
              onClick={() => toggleMobileNav()}
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 5 },
                }}
                className="w-5 h-px bg-white block"
              ></motion.span>
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-5 h-px bg-white block"
              ></motion.span>
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -5 },
                }}
                className="w-5 h-px bg-white block"
              ></motion.span>
            </motion.button>
          </div>

          <AnimatePresence>
            {mobileNav && (
              <MotionConfig
                transition={{
                  type: "spring",
                  bounce: 0.25,
                }}
              >
                <motion.div
                  variants={{
                    open: {
                      x: "0%",
                      transition: {
                        type: "spring",
                        bounce: 0.25,
                        when: "beforeChildren",
                      },
                    },
                    closed: {
                      x: "-100%",
                      transition: {
                        type: "spring",
                        bounce: 0.25,
                        when: "afterChildren",
                      },
                    },
                  }}
                  animate="open"
                  initial="closed"
                  exit="closed"
                  className="fixed inset-0 bg-[#000301] min-h-screen"
                >
                  <motion.div
                    variants={{
                      open: {
                        y: "0%",
                        opacity: 1,
                      },
                      closed: {
                        y: "25%",
                        opacity: 0,
                      },
                    }}
                    className="text-white font-cantarella font-bold pt-[160px] flex flex-col "
                  >
                    <Link
                      href="/about"
                      className="hover:text-green-400 flex duration-700 border-b border-white/10 pl-8 py-7"
                    >
                      <Icon
                        path={mdiAccount}
                        size={1}
                        className="cursor-pointer mr-4"
                      />
                      About
                    </Link>
                    <Link
                      href="/"
                      className="hover:text-green-400 flex py-7 duration-700 shadow-lg border-b border-white/10 pl-8"
                    >
                      <Icon
                        path={mdiBriefcase}
                        size={1}
                        className="cursor-pointer mr-4"
                      />
                      Projects
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:text-green-400 flex duration-700 border-b border-white/10 pl-8 py-7"
                    >
                      <Icon
                        path={mdiPhone}
                        size={1}
                        className="cursor-pointer mr-4"
                      />
                      Contact
                    </Link>

                    <Icon
                      path={mdiWhiteBalanceSunny}
                      size={1.5}
                      className="cursor-pointer relative left-0 right-0 mx-auto text-green-400 border-2 p-1 rounded-full border-white mt-10"
                    />
                  </motion.div>
                </motion.div>
              </MotionConfig>
            )}
          </AnimatePresence>
        </header>
      </nav>
    );
}