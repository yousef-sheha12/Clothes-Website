import { AnimatePresence } from "framer-motion";
import { domain, useFavoriteStore, useCartStore, cartIndex } from "../store";
import { FaTrash, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Favorites = () => {
  const { favorites, removeFromFav } = useFavoriteStore();
  const { addToCart } = useCartStore();
  const { openCart } = cartIndex();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-900 mb-2"
          >
            منتجاتي المفضلة
          </motion.h1>
          <div className="h-1 w-20 bg-red-500 mx-auto rounded-full"></div>
        </header>

        {favorites.length === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm border border-dashed border-gray-300"
          >
            <FaHeart className="text-gray-300 text-8xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600">
              قائمة المفضلة فارغة
            </h2>
            <p className="text-gray-400 mt-2 mb-6">
              يبدو أنك لم تضف أي منتجات بعد!
            </p>
            <Link
              to="/"
              className="btn btn-primary bg-black hover:bg-gray-800 border-none px-8"
            >
              تصفح المنتجات
            </Link>
          </motion.div>
        ) : (
          /* Favorites Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {favorites.map((item) => (
                <motion.div
                  key={item.id} // استخدام item.id المخزن في الـ store
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative group h-64 bg-gray-50 flex items-center justify-center p-6">
                    <img
                      src={domain + item.img?.url}
                      alt={item.name}
                      className="max-h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <button
                      onClick={() => removeFromFav(item.id)}
                      className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-colors shadow-sm"
                    >
                      <FaTrash size={16} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-2xl font-bold text-red-600">
                          {item.newPrice || item.price} EGP
                        </span>
                        {item.newPrice && (
                          <span className="block text-xs text-gray-400 line-through">
                            {item.price} EGP
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => {
                          addToCart(
                            item.documentId
                              ? item
                              : { ...item, documentId: item.id }
                          );
                          openCart();
                        }}
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors"
                      >
                        <FaShoppingCart size={14} />
                        <span className="text-sm font-medium">أضف للسلة</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
