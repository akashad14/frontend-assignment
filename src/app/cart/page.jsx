"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <p className="mt-4 text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center gap-4 border-b pb-4">
            {/* ✅ use item.product instead of product */}
            <Image
              src={item.product.imageUrl}
              alt={item.product.name}
              width={120}
              height={120}
              className="object-cover rounded"
              unoptimized
            />

            {/* Product Info */}
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{item.product.name}</h2>
              <p className="text-gray-600">
                Color: <span className="font-medium">{item.color}</span>
              </p>
              <p className="text-gray-600">
                Size: <span className="font-medium">{item.size}</span>
              </p>
              <p className="text-blue-600 font-semibold">
                ${item.product.price.toFixed(2)}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  removeFromCart(item.product.id, item.color, item.size)
                }
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                onClick={() => addToCart(item.product, item.color, item.size)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 border-t pt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total:</h2>
        <span className="text-2xl font-bold text-blue-600">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Clear Cart
        </button>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
}
