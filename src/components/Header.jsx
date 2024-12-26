import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="min-h-screen   overflow-hidden w-full flex items-center"
      // style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto text-center text-white px-7"
      >
        <h2
          className=" text-5xl inline-block max-w-4xl font-bold
        "
        >
          Explore Homes That Fits Your
          <br />
          <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            DREAMS..
          </span>
        </h2>
        <div className="space-x-4 mt-6">
          <a href="#Projects" className="border px-4 py-2">
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
