/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { childrenVariants, containerVariants } from "../constant";


const Image = ({ image }) => {
  return (
    <motion.div
      className="md:w-[35em] md:h-full transition-all duration-700 ease-in-out rounded-xl "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="size-full relative" variants={childrenVariants}>
        <img
          src={image?.preview}
          alt={image?.file.path}
          className="object-fit size-full rounded-3xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default Image;
