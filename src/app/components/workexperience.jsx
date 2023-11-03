import React from 'react'
import Hng from "../../../public/hng.webp";
import Drycode from "../../../public/drycode.webp";
import Ilead from "../../../public/ilead.webp";
import Image from "next/image";

const Workexperience = () => {
  return (
    <div className="px-8 lg:px-15">
      <section className=" max-w-[1024px] mx-auto">
        <h1
          data-aos="zoom-in"
          data-aos-duration="700"
          className="font-inter font-bold pt-[100px] pb-20 text-white text-3xl"
        >
          Work Experience
        </h1>

        <div className="container relative lg:mx-auto">
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="absolute w-1 z-0 h-full bg-white/10 shadow-md left-[40px] inset-0 md:mx-auto md:right-0 md:left-0"
          ></div>
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="relative z-10"
          >
            <Image
              src={Ilead}
              alt="Ilead Logo"
              width={80}
              height={80}
              className="rounded-sm object-cover shadow-md border-1 
              border-white bg-white/20 backdrop-blur-md p-4 xs:absolute md:mx-auto md:left-0 md:right-0"
            />
            <div className="relative pt-2 xs:pl-[120px] xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 left-[34px] h-4 w-4 transform 
                rotate-45 bg-white/30 backdrop-blur-md xs:top-8 xs:left-[112px] md:left-14"
              ></div>
              <div className="text-white font-cantarella bg-white/30 backdrop-blur-md rounded-xl p-4">
                <p className="">iLead Consult Africa</p>
                <p className="text-[14px]">Content Writer</p>
                <p className="text-white/50 tracking-wide">
                  AUG 2022 - FEB 2023
                </p>
                <p className="text-white text-[14px] pt-4">
                  Constructed blog posts for the company in order to facilitate
                  and direct clients into the company in order to show and prove
                  the organisation&apos;s worth.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="relative z-10 py-10"
          >
            <Image
              src={Drycode}
              alt="Drycode Logo"
              width={80}
              height={80}
              className="rounded-sm object-cover shadow-md border-1 
              border-white bg-white/20 backdrop-blur-md p-4 xs:absolute md:mx-auto md:left-0 md:right-0"
            />
            <div className="relative pt-2 xs:pl-[120px] xs:pt-0 md:w-1/2 md:ml-0 md:mr-auto md:pl-0 md:pr-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 left-[34px] h-4 w-4 transform 
                rotate-45 bg-white/30 backdrop-blur-md xs:top-8 xs:left-[112px] md:left-auto md:right-14"
              ></div>
              <div className="text-white font-cantarella bg-white/30 backdrop-blur-md rounded-xl p-4">
                <p className="">Drycode Organization</p>
                <p className="text-[14px]">Frontend Developer Intern</p>
                <p className="text-white/50 tracking-wide">
                  July 2023 - August 2023
                </p>
                <p className="text-white text-[14px] pt-4">
                  Constructed a responsive web application utilising 90% Reactjs
                  and 100% tailwind css, ensuring optimal performance, seamless
                  user experience, and zero traffic issues.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="relative z-10"
          >
            <Image
              src={Hng}
              alt="HNG Logo"
              width={80}
              height={80}
              className="rounded-sm object-cover shadow-md border-1 
              border-white bg-white/20 backdrop-blur-md p-4 xs:absolute md:mx-auto md:left-0 md:right-0"
            />
            <div className="relative pt-2 xs:pl-[120px] xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 left-[34px] h-4 w-4 transform 
                rotate-45 bg-white/30 backdrop-blur-md xs:top-8 xs:left-[112px] md:left-14"
              ></div>
              <div className="text-white font-cantarella bg-white/30 backdrop-blur-md rounded-xl p-4">
                <p className="">HNGx Internship</p>
                <p className="text-[14px]">Frontend Developer Intern</p>
                <p className="text-white/50 tracking-wide">
                  SEPT 2022 - OCTOBER 2023
                </p>
                <p className="text-white text-[14px] pt-4">
                  Excelled in a challenging, high-pressure environment that
                  encouraged me to surpass my limits. This experience led to
                  significant personal and professional growth, enhancing my
                  skills and adaptability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Workexperience
