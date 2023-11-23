function Contact() {
  return (
    <section
      id="contact"
      className="max-w-contentContainer  mx-auto py-10 xl:py-32 flex flex-col items-center justify-center gap-4"
    >
      <p className="font-titleFont text-xl xl:text-base text-textGreen font-semibold flex items-center tracking-wide">
        Contact me
      </p>
      <div
        className="bg-gradient-to-br from-textGreen to-textDark  rounded-xl w-full xl:w-full mdl:w-10/12
        mdl:justify-between flex flex-col mdl:flex-row gap-3 mdl:gap-[3rem] justify-center items-center 
        px-8 py-8 xl:py-12 mx-auto"
      >
        <h2 className="font-titleFont font-medium tracking-wide text-white/90 text-2xl xl:text-3xl">
          Let&rsquo;s Start a Project
        </h2>
        <a href="mailto:hoangdean01@gmail.com">
          <button
            type="submit"
            className="w-36 h-12 text-[13px] font-semibold rounded-lg bg-textLight text-textDark border border-textLight hover:rounded-xl duration-300"
          >
            Get it touch
          </button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
