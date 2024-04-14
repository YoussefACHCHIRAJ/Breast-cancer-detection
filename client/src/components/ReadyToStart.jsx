import { motion } from "framer-motion";
import { containerVariants } from "../constant";
  
  const childrenVariants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 10,
      },
    },
  };

const ReadyToStart = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-1 md:space-y-4">
      <h1 className="text-xl md:text-3xl font-bold text-gray-800 leading-relaxed">
        Your image has been uploaded
      </h1>
      <motion.h1 variants={childrenVariants} className="text-2xl md:text-4xl font-bold leading-relaxed">
        Ready to Start <br className="hidden md:block" /> The Diagnostic?
      </motion.h1>
      <motion.p  variants={childrenVariants} className="text-lg md:text-xl">
        Your proactive action can save lives.
      </motion.p>
      <motion.p  variants={childrenVariants} className="text-lg md:text-xl  flex items-center justify-start gap-3">
        Click bellow to start{" "}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
</svg>

      </motion.p>
    </motion.div>
  );
};

export default ReadyToStart;
