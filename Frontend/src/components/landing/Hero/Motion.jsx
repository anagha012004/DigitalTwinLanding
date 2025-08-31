import { motion } from "framer-motion";
import HeroPng from "../../../assets/hero.png"; // your image

export default function HeroImage() {
  return (
    <motion.img
      src={HeroPng}
      alt="hero"
      className="w-[400px] h-auto mx-auto"
      whileHover={{
        scale: 1.1,         // zoom effect
        rotate: 5,          // small rotation
        boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" // shadow on hover
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15
      }}
    />
  );
}
