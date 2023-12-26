import React from "react";
import Icon from "@mdi/react";
import { mdiArrowTopRight, mdiGithub } from "@mdi/js";

const Projects = () => {
  const Project = [
    {
      id: 1,
      name: "TrafalgarClone",
      stack: "Bootstrap + Html",
      about: "Cloned Trafalagar website",
      link: "https://trafalgar-clone-site.netlify.app/",
    },

    {
      id: 2,
      name: "RandWord",
      stack: "JavaScript + CSS + EJS + Node + Html",
      about: "Random words and dictionary!📖",
      link: "https://randword.onrender.com/",
    },
    {
      id: 3,
      name: "EasyBank",
      stack: "JavaScript + Bootstrap + CSS + Html",
      about: "Cloned website of EasyBank",
      link: "https://easybank-clonesite.netlify.app/",
    },

    {
      id: 4,
      name: "ToBeDone",
      stack: "ReactJs + CSS",
      about: "To-do list webApp",
      link: "https://tobedone.vercel.app/",
    },
    {
      id: 5,
      name: "BankistClone",
      stack: "JQuery + Flowbite + TailwindCss + Html",
      about: "Cloned BankistApp🏦",
      link: "https://bankist-clone.vercel.app/",
    },
    {
      id: 6,
      name: "QuickQuizze",
      stack: "Tailwindcss + TriviaApi + Reactjs",
      about: "Quiz WebApp",
      link: "https://quick-quizze.vercel.app/",
    },
    {
      id: 7,
      name: "MovieBox",
      stack: "Tailwindcss + TMNDBApi + Reactjs + Vite",
      about: "Movie Webapp",
      link: "https://tc-moviebox.vercel.app/",
    },
    {
      id: 8,
      name: "QrCodeGen",
      stack: "Tailwindcss + Reactjs",
      about: "Scannable Qr Codes",
      link: "https://i-qr-code-gen.vercel.app/",
    },
    {
      id: 9,
      name: "ImageGallery",
      stack: "FireBase + DnD + Tailwindcss + Reactjs",
      about: "DragnDrop and Authentication",
      link: "https://tc-image-gallery.vercel.app/",
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
        <div>
          {Project.map((item, index) => (
            <div
              key={index}
              className="font-cantarella text-white
            "
            >
              <div className="flex group flex-col gap-[68px] sm:gap-24 first:border-t border border-t-0 border-white/30 hover:border-white p-4">
                <div className="flex group items-center justify-between">
                  <p className="text-[12px] sm:text-[14px] w-[200px group-hover:text-white text-white/50 ">
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
                <p className="panchang font-[600] text-2xl sm:text-4xl md:text-6xl">
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
