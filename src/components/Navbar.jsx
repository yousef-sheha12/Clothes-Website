import React, { useEffect, useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaRegHeart } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { useCartStore, useFavoriteStore } from "../store";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [openModle, setOpen] = useState(false);
  const navigate = useNavigate();
  const cartCount = useCartStore((state) => state.cartCount());
  const favCount = useFavoriteStore((state) => state.favCount());
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = openModle ? "hidden" : "auto";
  }, [openModle]);

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <div className="w-full h-[70px] flex justify-center items-center bg-white/90 backdrop-blur-md border-b sticky top-0 z-40">
        <div className="w-[90%] md:w-[75%] flex justify-between items-center">
          <Link to="/" className="text-3xl flex items-end gap-2 font-bold">
            {t("logoName")}
            <span className="text-base text-gray-400 hidden md:flex font-medium">
              {t("logoSubtitle")}
            </span>
          </Link>

          <div className="hidden md:flex gap-8 font-semibold">
            <Link to="/">{t("home")}</Link>
            <Link to="/about">{t("about")}</Link>
            <Link to="/contact">{t("contactUs")}</Link>
          </div>

          <div className="flex items-center gap-5">
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <BiCartAdd size={26} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/favorites")}
            >
              <FaRegHeart size={24} />
              {favCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {favCount}
                </span>
              )}
            </div>

            <button
              onClick={() =>
                i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
              }
              className="px-3 py-1 border rounded-md text-sm font-semibold"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>

            <button onClick={() => setOpen(true)} className="md:hidden">
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openModle && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 text-2xl font-semibold"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={30} />
            </button>

            <Link onClick={() => setOpen(false)} to="/">
              {t("home")}
            </Link>

            <Link onClick={() => setOpen(false)} to="/about">
              {t("about")}
            </Link>

            <Link onClick={() => setOpen(false)} to="/contact">
              {t("contactUs")}
            </Link>

            <div className="flex items-center gap-6 mt-10 text-xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <FaInstagram />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <FaFacebookSquare />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <AiFillTikTok />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
