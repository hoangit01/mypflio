import { motion } from "framer-motion";

function Banner() {
  return (
    <section
      id="home"
      className="w-full p-4 bg-slate-100/60 dark:bg-hoverColor/60"
    >
      <div className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm font-bodyFont tracking-wider text-textGreen "
        >
          Welcome, have a nice day !
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >
          Tim Cook.
          <span className="text-textDark mt-2 lgl:mt-4">
            Lorem ipsum dolor sit amet
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base md:max-w-[650px] text-textDark font-medium"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
          risus in hendrerit gravida rutrum quisque non tellus orci.&nbsp;
          <a href="" target="_blank">
            <span className="text-textGreen text-base inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
              Learn more
              <span className="w-full h-[1px] bg-textGreen absolute left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
          </a>
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-52 h-14 text-sm capitalize font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out
        </motion.button>
      </div>
    </section>
  );
}

export default Banner;
