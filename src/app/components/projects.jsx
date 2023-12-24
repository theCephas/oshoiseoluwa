import React from "react";
import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";

const Projects = () => {
  const Project = [
    {
      id: 1,
      name: "TrafalgarClone",
      stack: "Bootstrap + Html",
      about: "This is a cloned website of the trafalgar website",
      link: "https://trafalgar-clone-site.netlify.app/",
    },

    {
      id: 2,
      name: "RandWord",
      stack: "JavaScript + CSS + EJS + Node + Html",
      about: "Generates random word every 24hours and a dictionary!📖",
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
      about: "A to-do list webApp",
      link: "https://tobedone.vercel.app/",
    },
    {
      id: 5,
      name: "BankistClone",
      stack: "JQuery + Flowbite + TailwindCss + Html",
      about: "The Bankist App Cloned🏦",
      link: "https://bankist-clone.vercel.app/",
    },
    {
      id: 6,
      name: "QuickQuizze",
      stack: "Tailwindcss + TriviaApi + Reactjs",
      about: "A quiz webapp to test your general knowledge.",
      link: "https://quick-quizze.vercel.app/",
    },
    {
      id: 7,
      name: "MovieBox",
      stack: "Tailwindcss + TMNDBApi + Reactjs + Vite",
      about: "A Movie Webapp to view your top-rated movies read on them.",
      link: "https://tc-moviebox.vercel.app/",
    },
    {
      id: 8,
      name: "QrCodeGen",
      stack: "Tailwindcss + Reactjs",
      about: "Created to generate scannable qr codes with very pleasing UI",
      link: "https://i-qr-code-gen.vercel.app/",
    },
    {
      id: 9,
      name: "ImageGallery",
      stack: "FireBase + DnD + Tailwindcss + Reactjs",
      about: "A drag and drop feature and authentication😊",
      link: "https://tc-image-gallery.vercel.app/",
    },
  ];
  return (
    <div className="px-8 lg:px-10">
      <section className="mx-auto max-w-[1440px]">
        <div data-aos="zoom-in">
          <p className="font-inter font-bold pt-[100px] text-white text-3xl">
            Projects 👨‍🍳
          </p>
          <p className="font-inter font-bold pt-[12px] pb-20 text-white text-sm">
            some of the projects I&apos;ve cooked! Check my{" "}
            <a
              href="https://github.com/theCephas"
              target="_blank"
              className="underline underline-offset-2"
            >
              Github
            </a>{" "}
            for more 🚀
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:gap-16 sm:place-content-center sm:grid-cols-2 md:grid-cols-3">
          {Project.map((item, index) => (
            <div
              key={index}
              className="relative  text-white hover:border-0 hover:border-white/30 border-2 border-green-500 font-cantarella"
            >
              <div className="relative top-[-14px] hover:top-0 left-[-14px] hover:left-0 backdrop-blur-md bg-white/30 p-4 h-[250px] flex flex-col gap-4 duration-300">
                <p className="font-inter text-green-400 text-[20px] font-[600] tracking-widest">
                  {item.name}
                </p>
                <p className="text-[14px] tracking-wider py-1 text-black/50 hover:text-black/70 ">
                  {item.stack}
                </p>
                <p className="text-[14px]">{item.about}</p>
                <p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex items-center tracking-widest text-[14px] hover:text-green-400 duration-500"
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
