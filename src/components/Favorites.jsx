// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { domain, useFavoriteStore } from "../store";

const Favorites = () => {
  const { favorites, increaseQty, decreaseQty, removeFromFav } =
    useFavoriteStore();

  return (
    <div className="w-full h-dvh animate__animated animate__fadeInLeft animate__fadeInLeft">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ transition: { duration: 5 } }}
        whileInView={{ opacity: 1 }}
      >
        <div className="bg-white p-4">
          <h1 className="text-center text-3xl font-bold animate__animated animate__fadeInUp animate__fadeInUpBig">
            Favorites
          </h1>

          <div className="w-full mt-5  ">
            {favorites.length === 0 ? (
              <p className="flex justify-center text-red-500">
                You Don't Have Fevorites , Add To Learn More
              </p>
            ) : (
              favorites.map((item) => (
                <div
                  key={item.documentId}
                  className=" w-full flex flex-col items-center gap-1 mb-5"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={domain + item.img?.url}
                      alt={item.name}
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <h4>{item.description}</h4>
                    </div>
                    <p className="text-blue-600 text-2xl font-semibold">
                      {item.newPrice ? item.newPrice : item.price} EGP
                    </p>
                  </div>
                  <div className="flex p-2 font-semibold">
                    <h1>
                      Total is :
                      {item.quantity *
                        (item.newPrice ? item.newPrice : item.price)}
                    </h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <button
                      className="btn btn-error"
                      onClick={() => removeFromFav(item.id)}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-neutral"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="btn btn-neutral"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Favorites;
