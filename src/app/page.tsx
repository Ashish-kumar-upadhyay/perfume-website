'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Home() {
  const { addToCart } = useCart()

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1
    })
  }

  // Select featured products
  const featuredProducts = products.slice(0, 3)
  const newArrivals = products.slice(3, 7)

  return (
    <div>
      {/* Hero Section with Video */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-h-screen w-full object-cover"
        >
          <source src="/a.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-screen flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-bold md:text-7xl"
          >
            Luxury Perfumes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg md:text-xl"
          >
            Discover your signature scent
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/shop"
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-colors hover:bg-gray-200"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] text-center mb-4">Featured Products</h2>
          <p className="text-[15px] text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our handpicked selection of luxury fragrances, each crafted to create unforgettable moments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[18px] mb-2">{product.name}</h3>
                <p className="text-[15px] text-gray-600 mb-4">{product.description}</p>
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

      {/* New Arrivals Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] text-center mb-4">New Arrivals</h2>
          <p className="text-[15px] text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our latest additions to the collection.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group"
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

      {/* Brand Story Section */}
      <div className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] mb-6">Our Story</h2>
              <p className="text-[15px] text-gray-600 mb-6">
                At LUXE, we believe that every fragrance tells a story. Our carefully curated collection 
                brings together the finest perfumes from around the world, each one selected for its 
                unique character and exceptional quality.
              </p>
              <Link
                href="/about"
                className="text-[15px] border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 