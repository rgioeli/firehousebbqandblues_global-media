"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsXCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const ParentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      ease: "linear",
    },
  },
};

const ChildVariants = {
  initial: {
    x: -100,
  },
  animate: {
    x: 0,
  },
};

const Navbar = () => {
  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const handleOpenMobileNav = () => {
    setMenuOpen(true);
  };

  const handleCloseMobileNav = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#0B0D12]/90 transition-opacity duration-200 text-white hidden md:flex md:flex-col">
        <div className="max-w-6xl mx-auto flex-col justify-between w-full py-5">
          <div className="flex justify-between items-center px-2.5">
            <h1 className="text-2xl font-bold">Firehouse BBQ & Blues</h1>
            <ul className="flex items-center gap-x-5 text-lg cursor-pointer">
              <li>Menu</li>
              <li>Gallery</li>
              <li>About</li>
              <li>Directions</li>
              <li className={`bg-red-800 text-white p-2.5`}>Order Online</li>
            </ul>
          </div>
        </div>
      </nav>
      {/** Mobile Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-[#0B0D12]/90 transition-opacity duration-200 text-white md:hidden">
        <div className="max-w-6xl mx-auto flex-col justify-between w-full py-5">
          <div className="flex justify-between items-center px-2.5">
            <h1 className="text-2xl font-bold">Firehouse BBQ & Blues</h1>
            <FaBars className="text-3xl" onClick={handleOpenMobileNav} />
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.div className="h-screen w-screen absolute top-0 left-0 z-50 bg-[#111]/90 flex flex-col items-end gap-y-5 p-5">
            <BsXCircleFill
              className="text-4xl"
              onClick={handleCloseMobileNav}
            />
            <motion.ul
              variants={ParentVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col w-full h-full justify-start items-end gap-y-5 text-4xl cursor-pointer"
            >
              <motion.li variants={ChildVariants}>Menu</motion.li>
              <motion.li variants={ChildVariants}>Gallery</motion.li>
              <motion.li variants={ChildVariants}>About</motion.li>
              <motion.li variants={ChildVariants}>Directions</motion.li>
              <motion.li
                variants={ChildVariants}
                className={`bg-red-800 text-white p-2.5`}
              >
                Order Online
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
