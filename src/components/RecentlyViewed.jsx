'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RecentlyViewed() {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    setRecentlyViewed(stored.reverse()); // show newest first
  }, []);

  if (recentlyViewed.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {recentlyViewed.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="block border rounded p-4 hover:shadow">
            <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover" />
            <h3 className="mt-2 font-medium">{product.name}</h3>
            <p className="text-blue-600">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
