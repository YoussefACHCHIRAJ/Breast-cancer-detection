/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { childrenVariants } from "../constant";


const ErrorMessage = ({ message }) => {
  return (
    <motion.div
      variants={childrenVariants}
      initial="hidden"
      animate="visible"
      className="text-sm bg-red-600 p-4 rounded-xl text-white"
    >
      {message}
    </motion.div>
  );
};

export default ErrorMessage;
