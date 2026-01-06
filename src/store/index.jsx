import { create } from "zustand";
import { persist } from "zustand/middleware";

export const domain = "http://localhost:1337";

// To Store Shared States
// create => To create New State
export const cartIndex = create((set) => ({
  value: false,
  openCart: () => set(() => ({ value: true })),
  closeCart: () => set(() => ({ value: false })),
}));

// store/cartStore.js

export const useCartStore = create(
  persist(
    (set, get) => ({
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

      cartCount: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: "cart-storage",
    }
  )
);

export const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      // تعديل وظيفة التبديل لتخزين الكائن بالكامل
      toggleFavorite: (product) => {
        const currentFavs = get().favorites;
        const isExist = currentFavs.find(
          (item) => item.id === product.documentId
        );

        if (isExist) {
          set({
            favorites: currentFavs.filter(
              (item) => item.id !== product.documentId
            ),
          });
        } else {
          set({
            favorites: [
              ...currentFavs,
              {
                id: product.documentId,
                name: product.name,
                description: product.description,
                price: product.price,
                newPrice: product.newPrice,
                img: product.img,
              },
            ],
          });
        }
      },

      removeFromFav: (id) =>
        set({
          favorites: get().favorites.filter((item) => item.id !== id),
        }),

      favCount: () => get().favorites.length,
    }),
    {
      name: "favorites-storage",
    }
  )
);

// export default useFavoriteStore;
