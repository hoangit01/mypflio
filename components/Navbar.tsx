import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { myLogo, myLogoBlue } from "@/public/assets";
import { MdOutlineClose } from "react-icons/md";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoFacebook,
  BiLogoYoutube,
  BiChevronRight,
} from "react-icons/bi";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handlClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setShowMenu(false);
    }
  }

  const navLinkStyle = `
  flex items-center gap-1 max-md:text-md font-semibold text-textGreen/60 hover:text-textGreen cursor-pointer duration-300 nav-link`;
  const navLinkStyleMobile = `
  navlink-mobile flex items-center gap-1 px-4 py-2 bg-white/80 hover:bg-textGreen/20 dark:bg-textGreen/20 hover:dark:text-white hover:dark:bg-textGreen rounded-lg max-md:text-md font-semibold text-textDark dark:text-textGreen cursor-pointer duration-300 nav-link`;
  const MobileIconStyle = `w-10 h-10 text-xl text-textDark/70 hover:text-textDark
    bg-textLight/80 border border-textLight hover:border-textLight/90 hover:bg-textLight/100
    dark:bg-hoverColor/70 dark:border-hoverColor/70 dark:text-textLight/30 dark:hover:text-textGreen rounded-full 
    rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300`;
  return (
    <div
      className="w-full mx-auto h-20 lg:h-[4rem] sticky top-0 z-50
     bg-transparent backdrop-blur-lg
      dark:border-white/10"
    >
      <div className="mdl:max-w-contentContainer max-w-containerXs h-full mx-auto py-1 px-4 font-titleFont flex items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="w-14"
              priority={true}
              src={myLogoBlue}
              alt="logo"
            />
          </motion.div>
        </Link>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-sm gap-7">
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <Link
                href="#home"
                className={`active && ${navLinkStyle}`}
                onClick={handleScroll}
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              <Link
                href="#about"
                className={`${navLinkStyle}`}
                onClick={handleScroll}
              >
                About
              </Link>
            </motion.li>

            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              <Link
                href="#experience"
                className={` ${navLinkStyle}`}
                onClick={handleScroll}
              >
                Experience
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              <Link
                href="#project"
                className={` ${navLinkStyle}`}
                onClick={handleScroll}
              >
                Project
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.5 }}
            >
              <Link
                href="#contact"
                className={` ${navLinkStyle}`}
                onClick={handleScroll}
              >
                Contact
              </Link>
            </motion.li>
          </ul>
          <a href="https://www.buymeacoffee.com/khaihoang01" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="px-4 py-2 rounded-md font-semibold text-[13px] text-textGreen border border-textGreen hover:bg-hoverColor duration-300"
            >
              Buy me a coffee ☕
            </motion.button>
          </a>
        </div>
        {/** Small Icon Section */}
        {/** Add Theme Switch */}
        <div className=" inline-flex items-center gap-3">
          <div className="mobile-theme-switch block">
            <ThemeSwitch />
          </div>
          <div
            onClick={() => setShowMenu(true)}
            className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
          >
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          </div>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handlClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide backdrop-blur-xl bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-80
              flex flex-col items-center justify-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-3xl text-textGreen 
                cursor-pointer hover:text-textDark"
              ></MdOutlineClose>

              {/** Nav mobile */}
              <div className="flex flex-col justify-center items-center gap-5">
                <ul className="flex flex-col text-[13px] w-full gap-2">
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  >
                    <Link
                      href="#home"
                      className={`${navLinkStyleMobile}`}
                      onClick={handleScroll}
                    >
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.1,
                      ease: "easeIn",
                    }}
                  >
                    <Link
                      href="#about"
                      className={` ${navLinkStyleMobile}`}
                      onClick={handleScroll}
                    >
                      About
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.2,
                      ease: "easeIn",
                    }}
                  >
                    <Link
                      href="#experience"
                      className={` ${navLinkStyleMobile}`}
                      onClick={handleScroll}
                    >
                      Experience
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.3,
                      ease: "easeIn",
                    }}
                  >
                    <Link
                      href="#project"
                      className={` ${navLinkStyleMobile}`}
                      onClick={handleScroll}
                    >
                      Project
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.4,
                      ease: "easeIn",
                    }}
                  >
                    <Link
                      href="#contact"
                      className={` ${navLinkStyleMobile}`}
                      onClick={handleScroll}
                    >
                      Contact
                    </Link>
                  </motion.li>
                </ul>
                <a
                  href="https://www.buymeacoffee.com/khaihoang01"
                  target="_blank"
                  aria-label="buymeacoffee"
                  className="mx-auto"
                >
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.6,
                      ease: "easeIn",
                    }}
                    className="px-4 py-3 font-semibold rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Buy me a coffee ☕
                  </motion.button>
                </a>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.65,
                    ease: "easeIn",
                  }}
                  className="w-full h-0.5 bg-textLight dark:bg-textDark/50 mt-5"
                ></motion.div>

                {/** Small social icon mobile */}
                <div className="flex gap-4 mt-2 mb-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      ease: "easeIn",
                    }}
                    href="#"
                    target="_blank"
                  >
                    <span className={`${MobileIconStyle}`}>
                      <BiLogoGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.85,
                      ease: "easeIn",
                    }}
                    href="#"
                    target="_blank"
                  >
                    <span className={`${MobileIconStyle}`}>
                      <BiLogoYoutube />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.9,
                      ease: "easeIn",
                    }}
                    href="#"
                    target="_blank"
                  >
                    <span className={`${MobileIconStyle}`}>
                      <BiLogoLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.95,
                      ease: "easeIn",
                    }}
                    href="#"
                    target="_blank"
                  >
                    <span className={`${MobileIconStyle}`}>
                      <BiLogoFacebook />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 1,
                      ease: "easeIn",
                    }}
                    href="#"
                    target="_blank"
                  >
                    <span className={`${MobileIconStyle}`}>
                      <BiLogoInstagramAlt />
                    </span>
                  </motion.a>
                </div>
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 font-normal tracking-widest text-textDark dark:text-textGreen text-center mt-4"
                href="tel:0859316310"
              >
                (+84) 859 316 310
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, ease: "easeIn" }}
                className="text-sm w-72 font-normal tracking-widest text-textDark dark:text-textGreen text-center mt-4"
                href="mailto:hoangdean01@gmail.com"
              >
                hoangdean01@gmail.com
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
