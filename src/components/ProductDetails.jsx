'use client';

import Image from 'next/image';

export default function ProductDetails({
  product,
  selectedColor,
  selectedSize,
  onColorSelect,
  onSizeSelect,
  onAddToCart,
  availableSizesForColor,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
     
      <div className="md:w-1/2 bg-gray-100 rounded-lg overflow-hidden shadow-md flex justify-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={400}
          className="object-contain"
          priority
           unoptimized
        />
      </div>

      {/* Product Info */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-3xl font-semibold text-blue-600">${product.price.toFixed(2)}</p>

        {/* Color Selector */}
        <div>
          <h3 className="font-medium">Color: {selectedColor}</h3>
          <div className="flex gap-2 mt-2">
            {product.variants.map((variant) => (
              <button
                key={variant.color}
                onClick={() => onColorSelect(variant.color)}
                style={{ backgroundColor: variant.hex }}
                className={`w-10 h-10 rounded-full border-2 focus:ring-2 ${
                  selectedColor === variant.color
                    ? 'border-blue-500 ring-blue-300'
                    : 'border-gray-300'
                }`}
                title={variant.color}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div>
          <h3 className="font-medium">Size: {selectedSize || 'Select one'}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {availableSizesForColor.map((size) => (
              <button
                key={size}
                onClick={() => onSizeSelect(size)}
                className={`px-4 py-2 border rounded focus:ring-2 ${
                  selectedSize === size
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onAddToCart}
          className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
