'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import ProductDetails from '@/components/ProductDetails';

export default function ProductDetailsWrapper({ product }) {
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(product.variants?.[0]?.color || '');
  const [selectedSize, setSelectedSize] = useState('');

  
  const availableSizesForColor =
    product.variants.find((v) => v.color === selectedColor)?.sizes || [];


  useEffect(() => {
    setSelectedSize('');
  }, [selectedColor]);

  const handleAddToCart = () => {
    if (!selectedColor) {
      alert('Please select a color.');
      return;
    }
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }
    addToCart(product, selectedColor, selectedSize);

   
    let viewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    viewed = viewed.filter((p) => p.id !== product.id);
    viewed.push(product);
    if (viewed.length > 3) viewed = viewed.slice(-3);
    localStorage.setItem('recentlyViewed', JSON.stringify(viewed));
  };

  return (
    <ProductDetails
      product={product}
      selectedColor={selectedColor}
      selectedSize={selectedSize}
      onColorSelect={setSelectedColor}
      onSizeSelect={setSelectedSize}
      onAddToCart={handleAddToCart}
      availableSizesForColor={availableSizesForColor}
    />
  );
}
