import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface ICart {
  items: ICartItem[];
  totalItems: number;
  totalPrice: number;
}
export interface CartActions {
  addToCart: (product: ICartItem) => void;
  removeFromCart: (productId: string) => void;
  removeItemFromCart: (productId: string) => void;
  updateText(
    type: "items" | "totalItems" | "totalPrice",
    val: string | string[]
  ): void;
  reset: () => void;
}

export const useCartStore = create(
  persist<ICart & CartActions>(
    (set, _get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      updateText(type, val) {
        set(() => ({ [type]: val }));
      },
      addToCart(product: ICartItem) {
        set((state) => {
          const existingProduct = state.items.find((p) => p.id === product.id);
          if (existingProduct) {
            existingProduct.quantity += 1;
          } else {
            state.items.push({ ...product, quantity: 1 });
          }
          return {
            items: state.items,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          };
        });
      },
      removeFromCart(productId: string) {
        set((state) => {
          const existingProduct = state.items.find((p) => p.id === productId);
          if (existingProduct) {
            if (existingProduct.quantity === 1) {
              state.items = state.items.filter((p) => p.id !== productId);
            } else {
              existingProduct.quantity -= 1;
            }
          }
          return existingProduct
            ? {
                items: state.items,
                totalItems: state.totalItems - 1,
                totalPrice: state.totalPrice - existingProduct.price,
              }
            : state;
        });
      },
      removeItemFromCart(productId: string) {
        set((state) => {
          const existingProduct = state.items.find((p) => p.id === productId);
          if (existingProduct) {
            state.items = state.items.filter((p) => p.id !== productId);
            
          }
          return existingProduct
            ? {
                items: state.items,
                totalItems: state.totalItems - existingProduct.quantity,
                totalPrice:
                  state.totalPrice -
                  (existingProduct.price * existingProduct.quantity),
              }
            : state;
        });
      },
      reset: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
