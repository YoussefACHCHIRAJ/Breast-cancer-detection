import { motion } from "framer-motion";
import { authors } from "../constant";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childrenVariants = {
  hidden: {
    y: 30,
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
const Contact = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 variants={childrenVariants} className="text-3xl font-bold  my-4 ml-12">
        This app has been made by :{" "}
      </motion.h2>
      <div className=" space-y-4">
        {authors.map(({profile, name, email}) => (
          <motion.div
            key={email}
            variants={containerVariants}
            className="w-1/2 bg-slate-100/30 border-gray-300 p-4 rounded-xl border  flex gap-4 items-center  mx-auto"
          >
            <motion.div
              variants={childrenVariants}
              className="size-20 rounded-full bg-black"
            >
              <img
                src={`assets/${profile}`}
                alt="youssef"
                className="rounded-full object-fit size-full"
              />
            </motion.div>
            <div className="space-y-1">
              <motion.h1
                variants={childrenVariants}
                className="text-lg font-bold text-gray-600"
              >
                {name}
              </motion.h1>
              <motion.p variants={childrenVariants} className="text-gray-500">
                <span className="text-gray-700">E-mail : </span>
                {email}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
