'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, color, size) => {
    const existing = cart.find(
      (item) => item.product.id === product.id && item.color === color && item.size === size
    );
    if (existing) {
      setCart(
        cart.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { product, color, size, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId, color, size) => {
    setCart(cart.filter((item) => !(item.product.id === productId && item.color === color && item.size === size)));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
