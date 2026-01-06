// import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { cartIndex } from "../store";
import { useCartStore, domain } from "../store";
// import axios from "axios";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCartStore();

  const { closeCart } = cartIndex();

  // let domain = "http://localhost:1337/";
  // let endpoint = "api/products?populate=*";
  // let url = domain + endpoint;
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       cart(res.data.data);
  //       console.log(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div
      className="w-full h-dvh bg-black/70 fixed top-16 left-0 z-50 "
      onClick={closeCart}
    >
      <div
        className="w-[300px] overflow-auto  h-full shadow bg-white border-l absolute right-0 flex flex-col p-4 text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Cart</h1>
          <IoMdClose onClick={closeCart} className="text-2xl cursor-pointer" />
        </div>
        <div className="w-full mt-5  ">
          {cart.length === 0 ? (
            <p className="flex justify-center text-red-500">Cart is empty</p>
          ) : (
            cart.map((item) => (
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
                    onClick={() => removeFromCart(item.id)}
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
    </div>
  );
};

export default CartPage;
