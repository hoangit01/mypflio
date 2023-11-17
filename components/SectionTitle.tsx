interface Props {
  title: string;
  titleNo: string;
}

function SectionTitle({ title, titleNo }: Props) {
  return (
    <h2 className="text-2xl font-titleFont font-semibold flex items-center text-textGreen">
      <span className="text-base md:text-lg text-textGreen mr-2">
        {titleNo}.
      </span>
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
}

export default SectionTitle;
