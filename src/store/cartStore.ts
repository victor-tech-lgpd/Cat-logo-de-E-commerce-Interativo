// src/store/cartStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types/Product';
import { toast } from 'react-toastify';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[]; // Corrected to array type
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [], // Initialize as empty array
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...currentItems, { ...product, quantity: 1 }] });
        }
        toast.success(`${product.title} adicionado ao carrinho!`);
      },
      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
        toast.info('Item removido do carrinho.');
      },
      updateQuantity: (productId, quantity) => {
        if (quantity < 1) {
          get().removeItem(productId);
          toast.info('Item removido do carrinho.');
        } else {
          set({
            items: get().items.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          });
        }
      },
      clearCart: () => {
        set({ items: [] }); // Corrected to empty array
        toast.info('Carrinho limpo.');
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export const useCartTotalItems = () => useCartStore((state) =>
  state.items.reduce((total, item) => total + item.quantity, 0)
);

export const useCartTotalPrice = () => useCartStore((state) =>
  state.items.reduce((total, item) => total + item.price * item.quantity, 0)
);
