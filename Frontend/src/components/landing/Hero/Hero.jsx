import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../../assets/blob.svg";
import HeroPng from "../../../assets/hero.png";
import { animate, motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-[#e7ffcf] overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
         <motion.h6
  variants={FadeUp(0.6)}
  initial="initial"
  animate="animate"
  className="mt-20 font-bold rounded text-xl md:text-4xl leading-snug"
  style={{ fontFamily: "Poppins, sans-serif", color: "#2e8f43ff" }} // Arial + dark green
>
  Reimagining Rural Development through a Digital Twin
</motion.h6>


<motion.p
  variants={FadeUp(0.9)}
  initial="initial"
  animate="animate"
  className="text-sm md:text-base text-gray-600 leading-relaxed"
>
  An interactive 3D replica of villages built with Blender, powered by AI and
  real-time data. Our platform transforms infrastructure planning, resource
  monitoring, and citizen engagement into a smart, visual, and data-driven
  experience – shaping the future of sustainable villages.
</motion.p>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                View Demo
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
             whileHover={{
        scale: 1.1,         // zoom effect
        rotate: 5,          // small rotation
     
      }}
      
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
