import React from "react";

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
      name: "InteractiveRating",
      stack: "Javascript + CSS + Html",
      about: "A frontendmentor javascript project to enhance my Js Skills",
      link: "https://interactive-ratings.vercel.app/",
    },
    {
      id: 3,
      name: "RandWord",
      stack: "JavaScript + CSS + EJS + Node + Html",
      about: "Generates random word every 24hours and a dictionary!📖",
      link: "https://randword.onrender.com/",
    },
    {
      id: 4,
      name: "EasyBank",
      stack: "JavaScript + Bootstrap + CSS + Html",
      about: "Cloned website of EasyBank",
      link: "https://easybank-clonesite.netlify.app/",
    },
    {
      id: 5,
      name: "NitPay",
      stack: "TypeScript + Tailwindcss + Html",
      about: "An imaginary bank. You know what to do😆",
      link: "https://nitpay-bank.vercel.app/",
    },
    {
      id: 6,
      name: "ToBeDone",
      stack: "ReactJs + CSS",
      about: "A to-do list webApp",
      link: "https://tobedone.vercel.app/",
    },
    {
      id: 7,
      name: "BankistClone",
      stack: "JQuery + Flowbite + TailwindCss + Html",
      about: "The Bankist App Cloned🏦",
      link: "https://bankist-clone.vercel.app/",
    },
    {
      id: 8,
      name: "QuickQuizze",
      stack: "Tailwindcss + TriviaApi + Reactjs",
      about: "A quiz webapp to test your general knowledge.",
      link: "https://quick-quizze.vercel.app/",
    },
    {
      id: 9,
      name: "MovieBox",
      stack: "Tailwindcss + TMNDBApi + Reactjs + Vite",
      about: "A Movie Webapp to view your top-rated movies read on them.",
      link: "https://tc-moviebox.vercel.app/",
    },
    {
      id: 10,
      name: "QrCodeGen",
      stack: "Tailwindcss + Reactjs",
      about: "Created to generate scannable qr codes with very pleasing UI",
      link: "https://i-qr-code-gen.vercel.app/",
    },
    {
      id: 11,
      name: "ImageGallery",
      stack: "FireBase + DnD + Tailwindcss + Reactjs",
      about: "A drag and drop feature and authentication😊",
      link: "https://tc-image-gallery.vercel.app/",
    },
  ];
  return (
    <div className="px-8 lg:px-10">
      <section className="mx-auto max-w-[1440px]">
        <p className="font-inter font-bold pt-[100px] pb-20 text-white text-3xl">
          Projects 👨‍🍳
        </p>

        <div className="grid grid-cols-1 gap-10 sm:gap-16 sm:place-content-center sm:grid-cols-2 md:grid-cols-3">
          {Project.map((item, index) => (
            <div
              key={index}
              className="relative  text-white hover:border-0 hover:border-white/30 border-2 border-green-500 font-cantarella"
            >
              <div className="relative cursor-pointer top-[-14px] hover:top-0 left-[-14px] hover:left-0 backdrop-blur-md bg-white/30 p-4 h-[230px] flex flex-col gap-4 duration-300">
                <p className="font-inter text-white text-[16px] font-[600]">
                  {item.name}
                </p>
                <p>{item.stack}</p>
                <p>{item.about}</p>
                <a href={item.link}>View</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
