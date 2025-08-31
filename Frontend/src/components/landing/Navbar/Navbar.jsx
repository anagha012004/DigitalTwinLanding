import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-md ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-4 px-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1
            className="text-2xl font-bold font-rounded"
            style={{
              
              color: "#064e3b", // dark green
            }}
          >
            DIGITAL TWIN
          </h1>
        </div>

        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path || menu.link}
                  className="inline-block py-2 px-3 relative group transition-colors"
                  style={{ color: "#064e3b" }} // dark green text
                >
                  <div className="w-2 h-2 bg-green-500 absolute rounded-full left-1/2 -translate-x-1/2 top-8 hidden group-hover:block"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="ml-4 primary-btn">Sign In</button>
          </ul>
        </div>

        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl cursor-pointer text-[#064e3b]" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
