'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inStock: boolean;
};

export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Men', 'Women', 'Unisex'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Section */}
        <div className="pt-32 pb-16">
          <h2 className="text-[22px] mb-12">In a mood</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[15px] mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[15px]">${product.price}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[15px] text-black hover:text-gray-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex space-x-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-[15px] pb-2 ${
                  selectedCategory === category
                    ? 'border-b-2 border-black'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Products Grid */}
        <div className="pb-20">
          <h2 className="text-[22px] mb-12">Most Wanted</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[15px] mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[15px]">${product.price}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[15px] text-black hover:text-gray-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 