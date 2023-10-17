import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

function Projects() {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Built" titleNo="03"></SectionTitle>
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/**Project One */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href="#"
            className="w-full xl:w-1/2 h-auto relative group"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={amazonImg}
                alt="amazonImg"
              ></Image>
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured P
            </p>
            <h3 className="text-2xl font-bold">Lorem Clone 2.0</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam itaque velit officiis numquam!{" "}
              <span className="text-textGreen">0-auth</span> consectetur
              laboriosam <span className="text-textGreen">Praesentium</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Wordpress</li>
              <li>NextJs</li>
              <li>TypeScript</li>
              <li>Git</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <TbBrandGithub></TbBrandGithub>
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <AiOutlineYoutube></AiOutlineYoutube>
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <RxOpenInNewWindow></RxOpenInNewWindow>
              </a>
            </div>
          </div>
        </div>
        {/**Project Two */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            href="#"
            className="w-full xl:w-1/2 h-auto relative group"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={cyberImg}
                alt="cyberImg"
              ></Image>
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured P
            </p>
            <h3 className="text-2xl font-bold">Lorem Clone 2.1</h3>
            <p className="bg-[#112240] xl:-mr-16 text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam itaque velit officiis numquam!{" "}
              <span className="text-textGreen">0-auth</span> consectetur
              laboriosam <span className="text-textGreen">Praesentium</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Wordpress</li>
              <li>NextJs</li>
              <li>TypeScript</li>
              <li>Git</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <TbBrandGithub></TbBrandGithub>
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <AiOutlineYoutube></AiOutlineYoutube>
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <RxOpenInNewWindow></RxOpenInNewWindow>
              </a>
            </div>
          </div>
        </div>
        {/**Project Three */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href="#"
            className="w-full xl:w-1/2 h-auto relative group rounded-lg"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={noorShop}
                alt="noorShop"
              ></Image>
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured P
            </p>
            <h3 className="text-2xl font-bold">Lorem Clone 2.2</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam itaque velit officiis numquam!{" "}
              <span className="text-textGreen">0-auth</span> consectetur
              laboriosam <span className="text-textGreen">Praesentium</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Wordpress</li>
              <li>NextJs</li>
              <li>TypeScript</li>
              <li>Git</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <TbBrandGithub></TbBrandGithub>
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <AiOutlineYoutube></AiOutlineYoutube>
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <RxOpenInNewWindow></RxOpenInNewWindow>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
