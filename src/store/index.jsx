import { create } from "zustand";

// To Store Shared States
// create => To create New State
export const cartIndex = create((set) => ({
  value: false,
  openCart: () => set(() => ({ value: true })),
  closeCart: () => set(() => ({ value: false })),
}));

// store/cartStore.js

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const exists = get().cart.find((i) => i.id === product.documentId);

    if (exists) {
      set({
        cart: get().cart.map((item) =>
          item.id === product.documentId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({
        cart: [
          ...get().cart,
          {
            id: product.documentId,
            name: product.name,
            description: product.description,
            price: product.price,
            newPrice: product.newPrice,
            img: product.img,
            quantity: 1,
          },
        ],
      });
    }
  },

  increaseQty: (id) =>
    set({
      cart: get().cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }),

  decreaseQty: (id) =>
    set({
      cart: get()
        .cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    }),

  removeFromCart: (id) =>
    set({
      cart: get().cart.filter((item) => item.id !== id),
    }),

  cartCount: () => get().cart.reduce((total, item) => total + item.quantity, 0),
}));
