import React from "react";
import Icon from "@mdi/react";
import { mdiArrowTopRight, mdiGithub } from "@mdi/js";

const Projects = () => {
  const Project = [
    {
      id: 1,
      name: "BankistClone",
      stack: "JQuery + Flowbite + TailwindCss + Html",
      about: "Cloned BankistApp🏦",
      link: "https://bankist-clone.vercel.app/",
    },
    {
      id: 2,
      name: "QuickQuizze",
      stack: "Tailwindcss + TriviaApi + Reactjs",
      about: "Quiz WebApp",
      link: "https://quick-quizze.vercel.app/",
    },
    {
      id: 3,
      name: "MovieBox",
      stack: "Tailwindcss + TMNDBApi + Reactjs + Vite",
      about: "Movie Webapp",
      link: "https://tc-moviebox.vercel.app/",
    },
    {
      id: 4,
      name: "QrCodeGen",
      stack: "Tailwindcss + Reactjs",
      about: "Scannable Qr Codes",
      link: "https://i-qr-code-gen.vercel.app/",
    },
  ];
  return (
    <div className="px-6 lg:px-15">
      <section className="mx-auto max-w-[1440px]">
        <div data-aos="zoom-in">
          <p className="panchang font-bold pt-[100px] text-white text-3xl">
            Projects 👨‍🍳
          </p>
          <p
            className="font-cantarella
           font-bold pt-[12px] pb-20 text-white text-[12px] sm:text-sm leading-5 tracking-wider"
          >
            some of the projects I&apos;ve cooked! Check my{" "}
            <a
              href="https://github.com/theCephas"
              target="_blank"
              className="underline underline-offset-2"
            >
              github
            </a>{" "}
            for more! 🚀
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center ">
          {Project.map((item, index) => (
            <div
              key={index}
              className="font-cantarella text-white
            "
            >
              <div className="flex group flex-col h-[250px] justify-center cursor-pointer gap-[50px] first:border-t border border-t-0 border-white/30 hover:border-white p-4">
                <div className="flex group items-center justify-between">
                  <p className="text-[12px] smmd:text-[14px] group-hover:text-white text-white/50 ">
                    {item.stack}
                  </p>
                  <a
                    className="text-white/60 group-hover:text-white"
                    href={item.link}
                  >
                    <Icon
                      path={mdiGithub}
                      size={1.2}
                      className="inline mr-[1px]"
                    />
                  </a>
                </div>
                <p className="panchang font-[500] text-xl md:text-3xl">
                  {item.name}
                </p>

                <div className="flex justify-between items-center">
                  <p className="text-[14px] text-[#5C8374]">{item.about}</p>
                  <p>
                    <a
                      href={item.link}
                      target="_blank"
                      className="flex items-center tracking-widest text-[14px] text-white/60 group-hover:text-white"
                    >
                      <Icon
                        path={mdiArrowTopRight}
                        size={0.7}
                        className="inline"
                      />
                      View
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
