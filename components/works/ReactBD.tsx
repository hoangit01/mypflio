import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function ReactBD() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Developer{" "}
        <span className="text-textGreen tracking-wide">@Digityze Asia</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2021 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward></TiArrowForward>
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward></TiArrowForward>
          </span>
          Voluptas voluptate aliquid minus ipsam quasi dicta placeat tempora
          suscipit facere vero numquam molestias nihil reiciendis sunt eius
          voluptates, eos, labore rem?
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward></TiArrowForward>
          </span>
          Molestiae tempore animi! Iste quidem laborum corporis animi maxime
          magni alias.
        </li>
      </ul>
    </motion.div>
  );
}

export default ReactBD;
