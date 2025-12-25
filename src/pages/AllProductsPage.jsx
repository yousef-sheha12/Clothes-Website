import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartIndex, useCartStore } from "../store";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AllProductsPage = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { openCart } = cartIndex();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  let domain = "http://localhost:1337/";
  let endpoint = "api/products?populate=*";
  let url = domain + endpoint;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div id="collection" className="w-full h-full ">
      <div className="text-black py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold animate__animated animate__fadeInUp animate__fadeInUpBig">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1 }}
            >
              All Products
            </motion.div>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product?.map((el) => (
              <div
                key={el.documentId}
                className="cart bg-white text-black hover:shadow-xl transition-shadow p-4 flex flex-col gap-5 rounded-2xl"
              >
                <div className="flex justify-center items-center my-4">
                  <img
                    src={"http://localhost:1337" + el.img?.url}
                    alt={el.name}
                    className="w-35 h-50"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground h-10 md:h-12 overflow-hidden">
                    {el.description}
                  </p>
                  <h1 className="font-medium mb-2 line-clamp-2">{el.name}</h1>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-lg font-bold text-red-600">
                      Price :{el.price} EGP
                    </p>
                  </div>
                </div>
                <button
                  className="btn bg-black hover:bg-gray-900"
                  onClick={() => {
                    addToCart(el);
                    openCart();
                  }}
                >
                  Add To Cart
                </button>
                <button
                  className="btn bg-gradient-to-r from-blue-600 to-purple-600 border-none"
                  onClick={() => navigate("/shipping")}
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
