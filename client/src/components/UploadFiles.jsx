/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import DragFiles from "../components/DragFiles";

const uplaodBoxVariants = {
  hidden: {
    opacity: 0,
    x: "10vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.1,
      damping: 14,
    },
  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
    x: "-10vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.1,
      damping: 14,
    },
  },
};

const UploadFiles = ({ setFile, setImage }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 leading-relaxed ml-12 my-2 mb-8">
        Ready to detect early signs of breast cancer? <br /> Upload your image now to get started.
      </h1>
      <div className="flex items-center justify-center lg:gap-8">
        <motion.div variants={imgVariants} initial="hidden" animate="visible" className="w-1/4 hidden md:block">
          <img src="assets/upload.png" alt="upload" className="size-full" />
        </motion.div>

        <motion.form
          variants={uplaodBoxVariants} initial="hidden" animate="visible"
          className="h-[80%] md:w-1/2 isolate aspect-video backdrop-blur-xl bg-gray-300/20 rounded-xl p-2 relative z-20 flex flex-col"
        >
          <div className="flex-1 overflow-auto">
            <DragFiles setFile={setFile} setImage={setImage} />
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default UploadFiles;
