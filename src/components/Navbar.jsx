import React, { useEffect, useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaRegHeart } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { cartIndex, useCartStore, useFavoriteStore } from "../store";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { openCart } = cartIndex();
  const cartCount = useCartStore((state) => state.cartCount());
  const favCount = useFavoriteStore((state) => state.favCount());

  // منع الاسكرول و المينيو مفتوحة
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* ===== Navbar ===== */}
      <div className="w-full h-[70px] flex justify-center items-center bg-white text-black sticky top-0 z-50 shadow">
        <div className="w-[75%] flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl flex items-end gap-3 font-bold">
            Falcon
            <span className="text-base text-gray-400 hidden md:flex font-medium">
              clothes brand
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 font-semibold">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <BiCartAdd
              className="cursor-pointer"
              size={30}
              onClick={openCart}
            />
            {favCount > 0 && (
              <span className="absolute top-2 right-22 md:right-24 lg:right-45 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {favCount}
              </span>
            )}
            <FaRegHeart
              className="cursor-pointer"
              size={30}
              onClick={() => navigate("/favorites")}
            />
            {cartCount > 0 && (
              <span className="absolute top-2 right-34 md:right-35 lg:right-57 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden cursor-pointer"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* ===== Full Screen Menu ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white text-black z-[100]"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 cursor-pointer"
            >
              <X size={32} />
            </button>

            <Link
              to="/"
              className="text-3xl flex items-end gap-3 font-bold absolute left-5 top-10 w-full border-b-gray-400"
            >
              Falcon
              <span className="text-base text-gray-400 flex font-medium">
                clothes brand
              </span>
            </Link>
            {/* Menu Links */}
            <div className="flex flex-col h-full items-center gap-7 text-2xl font-semibold absolute left-10 top-35">
              <Link onClick={() => setOpen(false)} to="/">
                Home
              </Link>
              <Link onClick={() => setOpen(false)} to="/about">
                About
              </Link>
              <Link onClick={() => setOpen(false)} to="/contact">
                Contact Us
              </Link>
            </div>
            <div className="flex justify-center items-center gap-3 p-3 absolute left-40 top-80 ">
              <h1>Follow Us</h1>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3, // السرعة: كل ما قل الرقم، اللفة بقت أسرع
                  repeat: Infinity,
                  ease: "linear", // مهم جداً عشان اللفة تكون مستمرة ومنتظمة بدون توقف مفاجئ
                }}
              >
                <div className="bg-white rounded-full p-2">
                  <Link to="">
                    {" "}
                    <FaInstagram
                      size={20}
                      className="text-black cursor-pointer"
                    />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3, // السرعة: كل ما قل الرقم، اللفة بقت أسرع
                  repeat: Infinity,
                  ease: "linear", // مهم جداً عشان اللفة تكون مستمرة ومنتظمة بدون توقف مفاجئ
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
                  duration: 3, // السرعة: كل ما قل الرقم، اللفة بقت أسرع
                  repeat: Infinity,
                  ease: "linear", // مهم جداً عشان اللفة تكون مستمرة ومنتظمة بدون توقف مفاجئ
                }}
              >
                <div className="bg-white rounded-full p-2 ">
                  <Link to="">
                    <AiFillTikTok
                      size={20}
                      className="text-black cursor-pointer"
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
