import { useEffect } from "react";
import { useCartStore, domain } from "../store";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCartStore();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.quantity * (item.newPrice || item.price),
      0,
    );
  };

  return (
    <div
      className="w-full min-h-screen bg-white text-black p-4"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{t("cart")}</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-red-500 text-xl">{t("cartEmpty")}</p>
            <Link to="/" className="btn mt-4">
              {t("browseProducts")}
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => {
              const imageUrl = Array.isArray(item.img)
                ? item.img[0]?.url
                : item.img?.url;
              return (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center gap-6 p-4 border rounded-xl"
                >
                  <Link
                    to={`/product/${item.id}`}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={domain + imageUrl}
                      alt={item.name}
                      className="w-32 h-32 object-contain"
                    />
                  </Link>
                  <div className="flex-1 text-center md:text-start">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                  <div className="font-bold">
                    {t("totalIs")}{" "}
                    {item.quantity * (item.newPrice || item.price)} {t("egp")}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="btn btn-sm"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      className="btn btn-sm"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-error btn-sm text-white"
                      onClick={() => removeFromCart(item.id)}
                    >
                      {t("remove")}
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="text-2xl font-bold text-end pt-6 border-t">
              {t("totalIs")} {calculateTotal()} {t("egp")}
            </div>
            <button className="btn btn-primary w-full text-white text-lg">
              {t("checkout")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
