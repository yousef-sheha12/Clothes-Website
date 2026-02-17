import axios from "axios";
import { useEffect, useState } from "react";
import { cartIndex, useCartStore, domain } from "../store";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoriteStore } from "../store";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AllProductsPage = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = useCartStore((state) => state.addToCart);
  const { openCart } = cartIndex();

  const { favorites, toggleFavorite } = useFavoriteStore();

  const [product, setProduct] = useState([]);

  let endpoint = "/api/products?populate=*";
  let url = domain + endpoint;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div id="collection" className="w-full h-full " dir={isRtl ? "rtl" : "ltr"}>
      <div className="text-black py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold animate__animated animate__fadeInUp animate__fadeInUpBig">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1 }}
            >
              {t("allProducts")}
            </motion.div>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product?.map((el) => {
              const isFav = favorites.find((f) => f.id === el.documentId);
              const imageUrl = Array.isArray(el.img)
                ? el.img[0]?.url
                : el.img?.url;
              return (
                <div
                  key={el.documentId}
                  className="cart bg-white text-black hover:shadow-xl transition-shadow p-4 flex flex-col gap-5 rounded-2xl"
                >
                  <div className="flex justify-center items-center my-4">
                    <Link to={`/product/${el.documentId}`}>
                      <img
                        src={domain + imageUrl}
                        alt={el.name}
                        className="w-35 h-50"
                      />
                    </Link>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground h-10 md:h-12 overflow-hidden">
                      {el.description}
                    </p>
                    <h1 className="font-medium mb-2 line-clamp-2">{el.name}</h1>
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-lg font-bold text-red-600">
                        {t("price")} :{el.price} {t("egp")}
                      </p>
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col w-full gap-4 justify-center">
                    <button
                      className="btn bg-black hover:bg-gray-900"
                      onClick={() => {
                        addToCart(el);
                        toast.success(t("addedToCart"));
                        openCart();
                      }}
                    >
                      {t("addToCart")}
                    </button>
                    <button
                      className={`btn bg-linear-to-r from-blue-600 to-purple-600 border-none `}
                      onClick={() => {
                        toast.success(t("favoriteUpdated"));
                        toggleFavorite(el);
                      }}
                    >
                      {isFav ? (
                        <FaHeart className=" text-white text-xl" />
                      ) : (
                        <FaRegHeart className="text-white text-xl" />
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

export default AllProductsPage;
