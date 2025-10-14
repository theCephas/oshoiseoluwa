"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Icon from "@mdi/react";
import {
  mdiEmail,
  mdiPhone,
  mdiMapMarker,
  mdiDownload,
  mdiGithub,
  mdiLinkedin,
  mdiOpenInNew,
} from "@mdi/js";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const contactMethods = [
    {
      icon: mdiEmail,
      title: "Email",
      description: "Let's discuss your project",
      contact: "oshoiseoluwa@gmail.com",
      link: "mailto:oshoiseoluwa@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: mdiPhone,
      title: "Phone",
      description: "Available for calls",
      contact: "+234 806 4259 826",
      link: "tel:+2348064259826",
      color: "from-green-500 to-green-600",
    },
    {
      icon: mdiMapMarker,
      title: "Location",
      description: "Based in Nigeria",
      contact: "Lagos, Nigeria",
      link: "#",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: mdiDownload,
      title: "Resume",
      description: "Download my CV",
      contact: "Iseoluwa_Osho_CV.pdf",
      link: "/Iseoluwa_Osho_CV.pdf",
      color: "from-orange-500 to-orange-600",
      download: true,
    },
  ];

  const socialLinks = [
    {
      icon: mdiGithub,
      name: "GitHub",
      link: "https://github.com/theCephas",
      color: "hover:text-gray-400",
    },
    {
      icon: mdiLinkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/osho-iseoluwa",
      color: "hover:text-blue-400",
    },
    // {
    //   icon: mdiOpenInNew,
    //   name: "Blog",
    //   link: "https://devcephas.hashnode.dev",
    //   color: "hover:text-green-400",
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="panchang text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
            <span className="text-[#5C8374] ml-2 animate-wave">👋</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto font-cantarella leading-relaxed">
            Got a project in mind? I'd love to help you bring your ideas to
            life. Let's create something amazing together!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#5C8374]/50 transition-all duration-500 p-6"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon path={method.icon} size={1.2} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-white text-lg font-semibold mb-2 panchang">
                {method.title}
              </h3>
              <p className="text-white/60 text-sm mb-3">{method.description}</p>

              {method.download ? (
                <a
                  href={method.link}
                  download
                  className="text-[#5C8374] text-sm font-medium hover:text-[#93B1A6] transition-colors duration-300"
                >
                  {method.contact}
                </a>
              ) : (
                <a
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-[#5C8374] text-sm font-medium hover:text-[#93B1A6] transition-colors duration-300 break-all"
                >
                  {method.contact}
                </a>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5C8374]/0 to-[#5C8374]/0 group-hover:from-[#5C8374]/5 group-hover:to-[#93B1A6]/5 transition-all duration-500 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          data-aos="fade-up"
          className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 panchang">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a new website, want to improve an existing one, or
            have a unique project in mind, I'm here to help turn your vision
            into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:oshoiseoluwa@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#5C8374] text-white font-semibold rounded-xl hover:bg-[#5C8374]/90 transition-all duration-300 hover:scale-105"
            >
              <Icon path={mdiEmail} size={1} className="mr-2" />
              Send Email
            </a>
            <a
              href="/Iseoluwa_Osho_CV.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-3 border border-[#5C8374] text-[#5C8374] font-semibold rounded-xl hover:bg-[#5C8374] hover:text-white transition-all duration-300"
            >
              <Icon path={mdiDownload} size={1} className="mr-2" />
              Download CV
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div data-aos="fade-up" className="text-center">
          <h4 className="text-white text-lg font-semibold mb-6 panchang">
            Connect With Me
          </h4>

          <div className="flex items-center justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center text-white/70 ${social.color} transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-2 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <Icon path={social.icon} size={1.2} />
                </div>
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-wave {
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
