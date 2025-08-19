'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const { cart } = useCart();

  const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center rounded-lg m-4">

      <Link href="/" className="text-2xl font-bold text-blue-600">
        MyStore
      </Link>

      <nav>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products/1"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Product 1
            </Link>
          </li>
          <li>
            <Link
              href="/products/2"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Product 2
            </Link>
          </li>

  
          <li className="relative">
            <Link href="/cart" className="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              {totalItemsInCart > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItemsInCart}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
