import axios from "axios";
import { useEffect, useState } from "react";
import { GoZap } from "react-icons/go";
import { cartIndex, useCartStore, domain } from "../store";
import { mockProducts } from "../mockProducts";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoriteStore } from "../store";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SalePage = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });
  const [product, setProduct] = useState([]);
  const addToCart = useCartStore((state) => state.addToCart);
  const { openCart } = cartIndex();
  const { favorites, toggleFavorite } = useFavoriteStore();

  useEffect(() => {
    const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // API (hf.space) is down - using frontend-only mock data
  // Original: axios.get(`${domain}/product`).then((res) => setProduct(res.data)).catch((err) => console.log(err));
  useEffect(() => {
    axios
      .get(`${domain}/product`)
      .then((res) => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          setProduct(res.data);
        } else {
          setProduct(mockProducts);
        }
      })
      .catch(() => {
        console.log("[Mock] Using local products - API unavailable");
        setProduct(mockProducts);
      });
  }, []);

  return (
    <div
      id="sale"
      className="w-full bg-white py-16 bg-linear-to-r from-red-600 to-orange-500"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4  ">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 bg-red-50 p-8 rounded-3xl border border-red-100">
          <div className="flex items-center gap-4">
            <div className="bg-red-600 p-3 rounded-2xl text-white animate-pulse">
              <GoZap size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                {t("flashSale")}
              </h2>
              <p className="text-red-600 font-medium">{t("endsIn24Hours")}</p>
            </div>
          </div>
          <div className="flex gap-4">
            {[
              { label: t("hrs"), value: timeLeft.hours },
              { label: t("min"), value: timeLeft.minutes },
              { label: t("sec"), value: timeLeft.seconds },
            ].map((unit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center text-2xl font-black text-gray-900 border border-red-100">
                  {unit.value.toString().padStart(2, "0")}
                </div>
                <span className="text-[10px] font-bold text-red-400 mt-2 uppercase tracking-widest">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {product.map((el) => {
            const isFav = favorites.some((fav) => fav.id === el.id);
            // const imgUrl = Array.isArray(el.image)
            //   ? el.image[0]?.url
            //   : el.image?.url;
            return (
              <div
                key={el.id}
                className="group bg-white rounded-3xl border border-gray-100 hover:border-red-200 transition-all duration-500 hover:shadow-2xl hover:shadow-red-100/50 overflow-hidden"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <Link to={`/product/${el.id}`}>
                    <img
                      src={el.image}
                      alt={el.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-tighter">
                    {t("discount")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">
                    {el.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl font-black text-red-600">
                      {el.newPrice} {t("egp")}
                    </span>
                    <span className="text-sm text-gray-400 line-through font-medium">
                      {el.oldPrice} {t("egp")}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        addToCart(el);
                        toast.success(t("added"));
                        openCart();
                      }}
                      className="flex-1 bg-black text-white py-3 rounded-xl text-xs font-bold hover:bg-red-600 transition-colors"
                    >
                      {t("addToCart")}
                    </button>
                    <button
                      onClick={() => {
                        toggleFavorite(el);
                        toast.success(t("updated"));
                      }}
                      className={`p-3 rounded-xl border transition-all ${isFav ? "bg-red-50 border-red-500 text-red-500" : "bg-gray-50 border-gray-100 text-gray-400"}`}
                    >
                      {isFav ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SalePage;
