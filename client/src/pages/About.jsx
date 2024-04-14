import { motion } from "framer-motion";
import { childrenVariants, thingsToKeepInMind } from "../constant";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.02,
    },
  },
};

const About = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h1 variants={childrenVariants} className="text-3xl font-bold my-6 ml-12 underline">Welcome to Breast Cancer Classifier :</motion.h1>
      <motion.p  variants={childrenVariants} className="text-lg mx-4 text-gray-700 -tracking-tighter">
        Thank you for using our app to classify breast cancer images. Before we
        start the diagnostic process, here are a few things to keep in mind:
      </motion.p>
      <motion.ol variants={containerVariants} className="mt-2 mx-12 space-y-4">
        {thingsToKeepInMind.map(({title, content}, index) => (
          <li key={title}>
            <motion.h2 variants={childrenVariants} className="text-lg font-semibold">{index+1} ) {title} :</motion.h2>
            <motion.p variants={childrenVariants} className="text-gray-700 ml-5">{content}</motion.p>
          </li>
        ))}
      </motion.ol>
    </motion.div>
  );
};

export default About;
