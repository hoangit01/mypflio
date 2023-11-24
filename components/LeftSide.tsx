import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoFacebook,
  BiLogoYoutube,
} from "react-icons/bi";

const LeftSide = () => {
  const LeftSideIconStyle = `w-10 h-10 text-xl text-textDark/70 hover:text-textDark
    bg-textLight/80 border border-textLight hover:border-textLight/90 hover:bg-textLight/100
    dark:bg-hoverColor/70 dark:border-hoverColor/70 dark:hover:text-textGreen rounded-full 
    inline-flex items-center justify-center
    cursor-pointer hover:-translate-y-2 transition-all duration-300`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <a href="/" target="_blank" aria-label="Link to Social Account">
        <span className={LeftSideIconStyle}>
          <BiLogoGithub />
        </span>
      </a>
      <a href="/" target="_blank" aria-label="Link to Social Account">
        <span className={LeftSideIconStyle}>
          <BiLogoYoutube />
        </span>
      </a>
      <a href="/" target="_blank" aria-label="Link to Social Account">
        <span className={LeftSideIconStyle}>
          <BiLogoLinkedin />
        </span>
      </a>
      <a href="/" target="_blank" aria-label="Link to Social Account">
        <span className={LeftSideIconStyle}>
          <BiLogoFacebook />
        </span>
      </a>
      <a href="/" target="_blank" aria-label="Link to Social Account">
        <span className={LeftSideIconStyle}>
          <BiLogoInstagramAlt />
        </span>
      </a>
      <div className="w-[2px] h-32 bg-textLight dark:bg-textDark/50"></div>
    </div>
  );
};

export default LeftSide;
