/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { childrenVariants, containerVariants, results } from "../constant";
const Result = ({ res }) => {
  const result = results[res];
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={` p-4 rounded-xl ${
        res === "M" ? "bg-[#FFDAB9]" : "bg-[#ADD8E6]"
      }`}
    >
      <motion.h1
        variants={childrenVariants}
        className={`text-lg font-bold border-b-2 pb-2 border-white ${
          res === "M" ? "text-[#FF0000]" : "text-[#008000]"
        } flex items-center gap-2`}
      >
        {res === "B" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
            />
          </svg>
        )}
        {result?.title}
      </motion.h1>
      <motion.h2
        variants={childrenVariants}
        className={`text-xl font-bold ml-4 my-4 ${
          res === "M" ? "text-[#FF0000]" : "text-[#008000]"
        }`}
      >
        {result?.label}
      </motion.h2>
      <motion.p variants={childrenVariants} className="text-sm text-gray-700">
        {result?.text}
      </motion.p>
    </motion.div>
  );
};

export default Result;
