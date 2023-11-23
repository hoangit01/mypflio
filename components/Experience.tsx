import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";
import Google from "./works/Google";

function Experience() {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
  };

  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Work Experience" titleNo="02"></SectionTitle>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 xl:w-4/12 flex flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-textGreen text-textGreen"
                : "border-l-textLight text-textLight dark:border-l-hoverColor dark:text-textDark"
            } border-l-2 bg-transparent hover:bg-[#111c22] py-3 text-sm cursor-pointer duration-300 px-6 font-medium`}
          >
            Digityze Asia
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-textLight text-textLight dark:border-l-hoverColor dark:text-textDark"
            } border-l-2 bg-transparent hover:bg-[#111c22] py-3 text-sm cursor-pointer duration-300 px-6 font-medium`}
          >
            Lorem
          </li>
        </ul>
        {workReactbd && <ReactBD></ReactBD>}
        {workGoogle && <Google></Google>}
      </div>
    </section>
  );
}

export default Experience;
