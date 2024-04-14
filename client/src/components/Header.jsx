import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../constant";

const Header = () => {
  return (
    <header className="flex justify-between items-center flex-col md:flex-row mb-6 md:mb-4 lg:mb-0">
      <div className="flex items-center">
        <img src="assets/logo.png" alt="logo" className="lg:size-20 size-12" />
        <motion.h1
          initial={{ x: "-20vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, mass: 1, damping: 10 }}
          className="md:text-xl text-sm font-bold"
        >
          Breast cancer
        </motion.h1>
      </div>
      <div className="space-x-8 font-medium mr-4 ">
        {navLinks.map((navLink, index) => (
          <NavLink
            key={index}
            to={navLink.path}
            className={({ isActive }) =>
              [
                isActive ? "border-[#F26CA7]" : "border-white",
                " border-b-2 pb-1  hover:border-[#F26CA7] transition duration-500 text-sm lg:text-md ",
              ].join("")
            }
          >
            {navLink.content}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
