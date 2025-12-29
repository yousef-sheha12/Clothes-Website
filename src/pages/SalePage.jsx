import axios from "axios";
import { useEffect, useState } from "react";
import { GoZap } from "react-icons/go";
import { cartIndex, useCartStore, domain } from "../store";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoriteStore } from "../store";

const SalePage = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { openCart } = cartIndex();

  const { favorites, toggleFavorite, addToFav, removeFromFav } =
    useFavoriteStore();

  const [sale, setSale] = useState([]);
  let endpoint = "/api/sales?populate=*";
  let url = domain + endpoint;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setSale(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="sale" className="w-full h-full lg:h-[90%]">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-13">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate__animated animate__fadeInUp animate__fadeInUpBig">
            <div className="flex items-center justify-center gap-2 mb-4 ">
              <motion.div
                initial={{ x: 0, y: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{
                  y: [5, 5, -5, 5],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
              >
                <GoZap className="h-8 w-8 text-yellow-300" />
              </motion.div>
              <h2 className="text-3xl font-bold">Flash Sale</h2>
              <motion.div
                initial={{ x: 0, y: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{
                  y: [5, 5, -5, 5],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
              >
                <GoZap className="h-8 w-8 text-yellow-300" />
              </motion.div>
            </div>
            <p className="text-red-100 mb-4">
              Limited time offers - Up to 50% off!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sale?.map((el) => {
              const isFav = favorites.includes(el.documentId);
              return (
                <div
                  key={el.documentId}
                  className="cart bg-white text-black hover:shadow-xl transition-shadow p-4 flex flex-col gap-3 rounded-2xl w-55 h-120 md:w-60 md:h-115 lg:w-68"
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={domain + el.img?.url}
                      alt={el.name}
                      className="w-35 h-50"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground h-10 md:h-12 overflow-hidden">
                      {el.description}
                    </p>
                    <h1 className="font-medium mb-2 line-clamp-2">{el.name}</h1>
                    <div className="flex items-center gap-2 mb-3 h-10 md:h-12">
                      <p className="text-lg font-bold text-red-600">
                        New Price :{el.newPrice} EGP
                      </p>
                      <span className="text-sm text-muted-foreground line-through">
                        {el.oldPrice} EGP
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full gap-4 justify-center">
                    <button
                      className="btn bg-red-500 border-none hover:bg-red-700"
                      onClick={() => {
                        addToCart(el);
                        openCart();
                      }}
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn bg-gradient-to-r from-blue-600 to-purple-600 border-none hover:bg-red-600"
                      onClick={() => toggleFavorite(el.documentId)}
                    >
                      {isFav ? (
                        <FaHeart
                          onClick={() => {
                            addToFav();
                          }}
                          className="text-white text-xl"
                        />
                      ) : (
                        <FaRegHeart
                          onClick={() => {
                            removeFromFav();
                          }}
                          className="text-white text-xl"
                        />
                      )}
                    </button>
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
