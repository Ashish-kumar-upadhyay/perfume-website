'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
  {
    id: 1,
    name: 'Signature Scent',
    price: '$89',
    image: 'https://images.pexels.com/photos/3373230/pexels-photo-3373230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Fragrance',
    href: '/product/signature-scent'
  },
  {
    id: 2,
    name: 'Amber Musk',
    price: '$98',
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Fragrance',
    href: '/product/amber-musk'
  },
  {
    id: 3,
    name: 'Radiance Serum',
    price: '$68',
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Skin Care',
    href: '/product/radiance-serum'
  },
  {
    id: 4,
    name: 'Scent Sampler',
    price: '$35',
    image: 'https://images.pexels.com/photos/3762324/pexels-photo-3762324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Discovery Set',
    href: '/product/scent-sampler'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif tracking-wider text-brand-dark mb-2">
            Bestsellers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most loved products, handcrafted with premium ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={product.href} className="block">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-lg font-medium text-brand-dark group-hover:text-black transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-700">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/bestsellers"
            className="inline-block border border-brand-dark text-brand-dark px-8 py-3 rounded-sm font-medium tracking-wider text-sm uppercase hover:bg-brand-dark hover:text-white transition-colors duration-300"
          >
            View All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
}