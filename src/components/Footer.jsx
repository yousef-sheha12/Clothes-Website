import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full h-vh bg-gray-900 text-white  mt-10 flex flex-col gap-10">
      <div className=" flex flex-col md:flex-row  justify-between gap-10 items-center p-5 px-10 overflow-auto">
        <div className="logo">
          <Link to="/" className="text-3xl flex items-end gap-3 font-bold">
            Falcon
            <span className="text-base text-gray-400  font-medium">
              clothes brand
            </span>
          </Link>
          <p className="w-70 text-gray-100">
            Your one-stop destination for trendy and affordable clothing.
            Quality fashion for everyone.
          </p>
        </div>
        <div className="flex gap-6 text-center md:flex">
          <div className=" flex md:flex gap-6 md:gap-6 lg:gap-8 font-semibold ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="flex md:flex gap-6 md:gap-6 lg:gap-8 font-semibold ">
            <a href="#sale">Sale</a>
            <a href="#collection"> All Collection</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 p-3">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="bg-white rounded-full p-2">
            <Link to="">
              <FaInstagram size={20} className="text-black cursor-pointer" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="bg-white rounded-full p-2">
            <Link to="">
              <FaFacebookSquare
                size={20}
                className="text-black cursor-pointer"
              />
            </Link>
          </div>
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="bg-white rounded-full p-2 ">
            <Link to="">
              <AiFillTikTok size={20} className="text-black cursor-pointer" />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className=" flex justify-center ">
        <p className="font-semibold p-5 text-gray-300">
          You can exchange or return the item within 14 days, and you have a
          one-month warranty
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center p-5 ">
        <p className="text-gray-300 text-sm">Made with ❤️ for fashion lovers</p>
        <p className="text-gray-300 text-sm">
          © 2025 Falgon Clothes. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
