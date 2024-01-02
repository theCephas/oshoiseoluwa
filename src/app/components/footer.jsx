import Nextjs from "../../../public/nextjs.svg";
import Vercel from "../../../public/vercell.svg";
import Tailwind from "../../../public/tailwind.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-[150px] font-cantarella">
      <div className="border-t border-white/20 p-20 text-white text-[13px]">
        <p className="text-center">Built with:</p>
        <div className="flex items-center justify-center py-6 text-[11px] lg:text-[12px]">
          <a href="https://tailwindcss.com/" target="_blank" className="flex">
            <Image
              src={Tailwind}
              width={20}
              height={20}
              alt="Tailwind Icon"
              className="inline mr-2"
            />
            <span className="hover:underline pt-1">TailwindCss</span>
          </a>
          <a href="http://nextjs.org/" target="_blank" className="px-4 flex">
            <Image
              src={Nextjs}
              width={20}
              height={20}
              alt="Nextjs Icon"
              className="inline mr-2"
            />
            <span className="hover:underline pt-1">NextJs</span>
          </a>
          <a href="http://vercel.com/" target="_blank" className="flex">
            <Image
              src={Vercel}
              width={20}
              height={20}
              alt="Vercel Icon"
              className="inline mr-2"
            />
            <span className="hover:underline pt-1">Vercel</span>
          </a>
        </div>
        <p className="text-white/30 text-[11px] text-center">
          Copyright &copy; Osho Iseoluwa 2024 All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
