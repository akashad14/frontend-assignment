'use client';

import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-2 font-bold">{product.name}</h3>
      <p className="text-blue-600">${product.price.toFixed(2)}</p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() =>
            addToCart(product, product.variants[0].color, product.variants[0].sizes[0])
          }
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
        <button
          onClick={() => router.push(`/products/${product.id}`)}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          View
        </button>
      </div>
    </div>
  );
}
