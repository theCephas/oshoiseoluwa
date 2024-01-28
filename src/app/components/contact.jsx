import React from "react";
import Icon from "@mdi/react";
import { mdiArrowTopRight, mdiPhone, mdiEmail } from "@mdi/js";

const Contact = () => {
  return (
    <div className="px-6 lg:px-10">
      <section className="mx-auto max-w-[1440px]">
        <p className="text-white panchang pt-[100px] leading-10 text-center text-2xl md:text-4xl font-[600]">
          Hola<span className="animate-pulse">👋</span> Got A Project?
        </p>
        <p className="text-center text-[14px] text-white leading-7 font-[500] py-6">
          I can help you craft, build, and improve your projects to perfect
          taste! Kindly get in touch with me.
        </p>

        <section className="flex justify-center items-center m-auto">
          <div className="grid md:grid-cols-2 gap-6 place-content-center content-center mt-6">
            <div
              data-aos="flip-left"
              className="relative w-[300px] sm:w-[400px] backdrop-blur-md hover:shadow hover:shadow-gray-400 overflow-hidden group bg-black/20 p-4 h-[200px] flex flex-col justify-center gap-4 duration-300"
            >
              <p className="panchang text-[#93B1A6] text-[20px] font-[600] tracking-widest">
                Resume
              </p>
              <p className="text-[14px] tracking-wider py-1 text-white/70 ">
                <a
                  href="https://docs.google.com/document/d/12luzb8w2Mv4b4GJs05LNqh2iGeNFtM7eFaStsE_q6UQ/edit?usp=sharing"
                  target="_blank"
                  className="flex items-center tracking-widest text-[14px] hover:text-white/70"
                >
                  <Icon path={mdiArrowTopRight} size={0.7} className="inline" />
                  View
                </a>
              </p>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
            <div
              data-aos="flip-right"
              className="relative w-[100%] sm:w-[400px] backdrop-blur-md hover:shadow hover:shadow-gray-400 overflow-hidden group bg-black/20 p-4 h-[200px] flex flex-col justify-center gap-4 duration-300"
            >
              <p className="panchang text-[#93B1A6] text-[20px] font-[600] tracking-widest">
                Email
              </p>
              <p className="text-[14px] tracking-wider py-1 text-white/70 ">
                <a
                  href="mailto:oshoiseoluwa@gmail.com"
                  target="_blank"
                  className="flex gap-1 items-center tracking-widest text-[14px] hover:text-white/70"
                >
                  <Icon path={mdiEmail} size={0.7} className="inline" />
                  oshoiseoluwa@gmail.com
                </a>
              </p>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
