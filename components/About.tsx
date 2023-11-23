import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg, profileImgAi } from "@/public/assets";

function About() {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01"></SectionTitle>
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="ww-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            My working is creating{" "}
            <span className="text-textGreen">user-friendly</span> and
            aesthetically pleasing websites and applications that bring an
            excellent <span className="text-textGreen">user-experience</span>.
          </p>
          <p>
            I use design principles, user research, prototyping, testing, and
            collaboration tools to create responsive and interactive web
            products that meet the needs and{" "}
            <span className="text-textGreen">expectations</span> of the users.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          {/** List Technologies Working */}
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-4">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              ReactJS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Javascript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              HTML5 - CSS3
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              SASS/SCSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Bootstrap 5
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-xl bg-gradient-to-bl from-textGreen via-textLight to-textDark 
                dark:from-bodyColor dark:via-textDark dark:to-textGreen
                h-full object-cover shadow-lg"
                src={profileImgAi}
                placeholder="blur"
                alt="profile image"
              ></Image>
              <div className="hidden lgl:inline-block absolute w-full h-80  group-hover:bg-textGreen/10 rounded-md top-0 left-0 duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
