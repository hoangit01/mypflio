function Contact() {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col items-center justify-center gap-4"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What's Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maiores
        voluptas porro provident esse tempore quas sed corporis ipsa cumque,
        minima voluptate adipisci assumenda hic quo minus, a fugit quasi.
      </p>
      <a href="mailto:hoangdean01@gmail.com">
        <button className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
          Say Hi
        </button>
      </a>
    </section>
  );
}

export default Contact;
