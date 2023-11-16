import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
function Footer() {
  return (
    <section className="max-w-contentContainer mx-auto px-4 pb-[3rem]">
      <div className="footer-divider mx-auto border-t-2 border-textLight dark:border-textDark/50 pt-2">
        <div className="hidden  mdl:inline-flex items-center justify-center w-full gap-4 py-4">
          <a href="#" target="_blank">
            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandGithub></TbBrandGithub>
            </span>
          </a>
          <a href="#" target="_blank">
            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SlSocialYoutube></SlSocialYoutube>
            </span>
          </a>
          <a href="#" target="_blank">
            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SlSocialLinkedin></SlSocialLinkedin>
            </span>
          </a>
          <a href="#" target="_blank">
            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SlSocialFacebook></SlSocialFacebook>
            </span>
          </a>
          <a href="#" target="_blank">
            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SlSocialInstagram></SlSocialInstagram>
            </span>
          </a>
        </div>
        <div className="text-base text-center text-textDark">
          © 2023 All rights reserved
        </div>
      </div>
    </section>
  );
}

export default Footer;
