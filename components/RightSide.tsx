import React, { useEffect, useState } from "react";

const RightSide = () => {
  // //back to top button
  // const [btnVisible, setBtnVisible] = useState(false);

  // useEffect(() => {
  //   const scrollFunction = () => {
  //     if (
  //       document.documentElement.scrollTop > 30 ||
  //       document.body.scrollTop > 30
  //     ) {
  //       setBtnVisible(true);
  //     } else {
  //       setBtnVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", scrollFunction);
  // }, []);

  // const scrollUp = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textDark ">
      <a
        href="mailto:hoangdean01@gmail.com"
        type="button"
        className="wrm-vertical rounded-md px-1 text-sm font-medium md:tracking-wide md:rotate-180
        hover:text-textGreen transition-all duration-100"
      >
        hoangdean01@gmail.com
      </a>
      <div className="w-[2px] h-32 bg-textLight dark:bg-textDark/50"></div>
    </div>
  );
};

export default RightSide;
