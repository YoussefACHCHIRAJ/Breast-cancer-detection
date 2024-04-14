import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { containerVariants } from "../constant";

const childrenVariants = {
  hidden: {
    opacity: 0,
    y: "10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 10,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: "10vh",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 10,
    },
  },
};

const HomePage = () => {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="flex justify-center items-center flex-col md:flex-row">
        <div className="md:w-1/2 space-y-4 mx-2 md:mx-0">
          <h2 className="flex flex-col lg:text-6xl md:text-5xl text-4xl font-bold leading-[1.5]">
            <span className="text-[#F26CA7]">Breast Cancer</span>
            <motion.span variants={childrenVariants}>Diagnostic</motion.span>
          </h2>
          <motion.p
            variants={childrenVariants}
            className="text-2xl mr-6 leading-relaxed text-gray-500"
          >
            Empowering Women&apos;s Health: Revolutionizing Breast Cancer
            Diagnostics with AI Precision
          </motion.p>
          <motion.button
            className="px-6 py-4 rounded-xl text-white bg-[#F26CA7] font-bold border-2 border-[#F26CA7] "
            variants={childrenVariants}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px #F26CA7",
              boxShadow: "0px 0px 8px #F26CA7",
              radius: "1.5rem",
              background: "#FFFFFF",
              color: "#F26CA7",
              transition: {
                yoyo: 10,
              },
            }}
          >
            <NavLink to="/diagnostic">Try for free</NavLink>
          </motion.button>
        </div>

        <motion.div variants={imageVariants}>
          <img
            src="assets/hero.png"
            alt="hero"
            className="size-full object-contain"
          />
        </motion.div>
      </section>
    </motion.main>
  );
};
export default HomePage;
