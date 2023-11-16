import React from "react";

//Theme Mode Switch
const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textDark ">
      <a href="mailto:hoangdean01@gmail.com">
        <p className="text-sm font-bold md:tracking-wide md:rotate-90 py-5">
          scroll to top
        </p>
      </a>
      <div className="w-[2px] h-32 bg-textLight dark:bg-textDark/50"></div>
    </div>
  );
};

export default RightSide;
