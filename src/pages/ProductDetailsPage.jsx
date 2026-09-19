import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Minus,
  Plus,
  Heart,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { domain, useCartStore, useFavoriteStore, cartIndex } from "../store";
import { mockProducts } from "../mockProducts";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null);

  const addToCart = useCartStore((state) => state.addToCart);
  const { openCart } = cartIndex();
  const { favorites, toggleFavorite } = useFavoriteStore();

  // API (hf.space) is down - using frontend-only mock data
  // Original API call commented, fallback to mockProducts
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // Try API first
        console.log("Full Request URL:", `${domain}/product/${id}`);
        const salesRes = await axios.get(`${domain}/product/${id}`);
        let data = salesRes.data;
        if (!data) {
          const productsRes = await axios.get(`${domain}/product/${id}`);
          data = productsRes.data;
        }
        if (data && data.id) {
          setProduct(data);
          if (data?.image) setSelectedImg(data.image);
          if (data?.images?.[0]?.url) setSelectedImg(data.images[0].url);
          return;
        }
        throw new Error("No data");
      } catch {
        // Fallback to mock data
        console.log("[Mock] Using local product - API unavailable");
        const mockProduct = mockProducts.find((p) => String(p.id) === String(id));
        if (mockProduct) {
          setProduct(mockProduct);
          setSelectedImg(mockProduct.image);
        } else {
          setProduct(mockProducts[0]);
          setSelectedImg(mockProducts[0].image);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center font-bold">
        Product Not Found
      </div>
    );

  const allImages = product.images;
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium"
        >
          <ArrowLeft size={18} /> <span>Back</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 lg:p-12 bg-[#f9f9f9] flex flex-col gap-6">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={selectedImg}
                    className="w-full h-full object-contain p-4"
                  />
                </AnimatePresence>
              </div>

              {allImages.length > 1 && (
                <div className="flex flex-wrap gap-4 justify-center">
                  {allImages.map((imgUrl, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImg(imgUrl.url)}
                      className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                        selectedImg === imgUrl.url
                          ? "border-black scale-105 shadow-md"
                          : "border-transparent opacity-60"
                      }`}
                    >
                      <img
                        src={
                          imgUrl.url.startsWith("http")
                            ? imgUrl.url
                            : domain + imgUrl.url
                        }
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>
              <div className="text-3xl font-black mb-6">
                {product.newPrice || product.oldPrice} EGP
              </div>
              <p className="text-gray-500 text-lg mb-10">
                {product.description}
              </p>

              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center bg-gray-100 rounded-2xl p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-xl transition shadow-sm"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-14 text-center font-bold text-xl">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-xl transition shadow-sm"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <button
                  onClick={() => toggleFavorite(product)}
                  className={`p-4 rounded-2xl border-2 transition-all ${isFavorite ? "bg-red-50 border-red-500 text-red-500" : "bg-white border-gray-100 text-gray-400"}`}
                >
                  <Heart
                    size={24}
                    fill={isFavorite ? "currentColor" : "none"}
                  />
                </button>
              </div>

              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) addToCart(product);
                  toast.success("Added!");
                  openCart();
                }}
                className="w-full py-6 bg-black text-white rounded-4xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-all shadow-xl"
              >
                <ShoppingBag size={24} /> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
