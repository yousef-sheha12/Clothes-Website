import axios from "axios";
import { useEffect, useState } from "react";
import { GoZap } from "react-icons/go";
import { cartIndex, useCartStore, domain } from "../store";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoriteStore } from "../store";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SalePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = useCartStore((state) => state.addToCart);
  const { openCart } = cartIndex();
  const { favorites, toggleFavorite } = useFavoriteStore();
  const [sale, setSale] = useState([]);

  useEffect(() => {
    axios
      .get(`${domain}/api/sales?populate=*`)
      .then((res) => setSale(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="sale" className="w-full h-full lg:min-h-screen">
      <div className="bg-linear-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <GoZap className="h-10 w-10 text-yellow-300 shadow-2xl" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">
                FLASH SALE
              </h2>
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <GoZap className="h-10 w-10 text-yellow-300 shadow-2xl" />
              </motion.div>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {[
                { label: "HRS", value: timeLeft.hours },
                { label: "MIN", value: timeLeft.minutes },
                { label: "SEC", value: timeLeft.seconds },
              ].map((unit, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 min-w-[70px] border border-white/30 shadow-xl">
                    <span className="text-3xl font-mono font-bold">
                      {unit.value.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold mt-2 opacity-80 uppercase tracking-widest">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-red-100 text-lg font-medium opacity-90">
              Ends in 24 hours! Don't miss out on the best deals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sale?.map((el) => {
              const isFav = favorites.some(
                (f) => f.documentId === el.documentId,
              );
              const imgUrl = Array.isArray(el.img)
                ? el.img[0]?.url
                : el.img?.url;

              return (
                <div
                  key={el.documentId}
                  className="group bg-white text-black rounded-3xl p-4 flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg z-10">
                    -50% OFF
                  </div>

                  <Link
                    to={`/product/${el.documentId}`}
                    className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center"
                  >
                    <img
                      src={domain + imgUrl}
                      alt={el.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>

                  <div className="flex-1 flex flex-col">
                    <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">
                      {el.name}
                    </h3>
                    <p className="text-xs text-gray-400 mb-3 line-clamp-2 leading-relaxed">
                      {el.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-black text-red-600">
                          {el.newPrice} EGP
                        </span>
                        <span className="text-xs text-gray-400 line-through font-medium">
                          {el.oldPrice} EGP
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            addToCart(el);
                            toast.success("Added!");
                            openCart();
                          }}
                          className="flex-1 bg-black text-white py-3 rounded-xl text-xs font-bold hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                        >
                          Add To Cart
                        </button>
                        <button
                          onClick={() => {
                            toggleFavorite(el);
                            toast.success("Updated!");
                          }}
                          className={`p-3 rounded-xl border transition-all ${isFav ? "bg-red-50 border-red-500 text-red-500" : "bg-gray-50 border-gray-100 text-gray-400 hover:border-black"}`}
                        >
                          {isFav ? <FaHeart /> : <FaRegHeart />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePage;
