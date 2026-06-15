import { useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
  unavailable?: boolean;
}

export interface StoreGroup {
  id: string;
  name: string;
  deliveryTime: string;
  deliveryFee: number;
  items: CartItem[];
}

const INITIAL_CART: StoreGroup[] = [
  {
    id: "store-1",
    name: "Atelier Lua",
    deliveryTime: "40-60 min",
    deliveryFee: 12.9,
    items: [
      {
        id: "item-1",
        name: "Vestido Midi Linho Verde",
        size: "M",
        price: 189.0,
        quantity: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=160&h=160&fit=crop",
      },
      {
        id: "item-2",
        name: "Camiseta Cropped Off-White",
        size: "P",
        price: 79.0,
        quantity: 2,
        imageUrl:
          "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=160&h=160&fit=crop",
      },
    ],
  },
  {
    id: "store-2",
    name: "Casa Verão",
    deliveryTime: "50-70 min",
    deliveryFee: 9.9,
    items: [
      {
        id: "item-3",
        name: "Sandália Couro Caramelo",
        size: "38",
        price: 219.0,
        quantity: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=160&h=160&fit=crop",
        unavailable: true,
      },
    ],
  },
];

const DISCOUNT = 51.0;

export function fmt(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function useMenuCarrinho() {
  const [cart, setCart] = useState<StoreGroup[]>(INITIAL_CART);
  const [hasUnavailable, setHasUnavailable] = useState(true);

  const availableItems = cart.flatMap((s) =>
    s.items.filter((i) => !i.unavailable),
  );
  const storesWithDelivery = cart.filter((s) =>
    s.items.some((i) => !i.unavailable),
  );
  const subtotal = availableItems.reduce(
    (acc, i) => acc + i.price * i.quantity,
    0,
  );
  const totalDelivery = storesWithDelivery.reduce(
    (acc, s) => acc + s.deliveryFee,
    0,
  );
  const total = subtotal + totalDelivery - DISCOUNT;

  function updateQty(storeId: string, itemId: string, delta: number) {
    setCart((prev) =>
      prev
        .map((store) =>
          store.id !== storeId
            ? store
            : {
                ...store,
                items: store.items
                  .map((item) =>
                    item.id === itemId
                      ? {
                          ...item,
                          quantity: Math.max(0, item.quantity + delta),
                        }
                      : item,
                  )
                  .filter((i) => i.quantity > 0),
              },
        )
        .filter((s) => s.items.length > 0),
    );
  }

  function removeUnavailable() {
    setCart((prev) =>
      prev
        .map((s) => ({ ...s, items: s.items.filter((i) => !i.unavailable) }))
        .filter((s) => s.items.length > 0),
    );
    setHasUnavailable(false);
  }

  return {
    cart,
    hasUnavailable,
    subtotal,
    totalDelivery,
    total,
    storesWithDelivery,
    updateQty,
    removeUnavailable,
    DISCOUNT,
  };
}
