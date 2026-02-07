import { useEffect } from "react";
import { useCartStore, domain } from "../store";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCartStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-black p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-5">Cart</h1>
        <div className="w-full mt-5">
          {cart.length === 0 ? (
            <p className="flex justify-center text-red-500">Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.documentId}
                className="w-full flex md:flex-row flex-col items-center  gap-1 mb-5"
              >
                <div className="flex w-[90%] md:w-full gap-3 items-center">
                  <img
                    src={domain + item.img?.url}
                    alt={item.name}
                    className="w-25 h-25 md:w-30 md:h-30 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <h4>{item.description}</h4>
                  </div>
                </div>
                <div className="flex md:w-50 p-2 font-semibold">
                  <h1>
                    Total is :
                    {item.quantity *
                      (item.newPrice ? item.newPrice : item.price)}
                  </h1>
                </div>

                <div className="flex gap-3 items-center">
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
                  <button
                    className="btn btn-error"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
