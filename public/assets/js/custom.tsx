import React from "react";

const CustomIcons = (props: any) => {
  const { size = 16, fill = "currentColor", className, url } = props;
  return (
    <div className="">
      <svg
        className={className}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        stroke="currentColor"
        strokeWidth="0"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path fill={fill} fillRule="evenodd" d={url} />
      </svg>
    </div>
  );
};

export default CustomIcons;
