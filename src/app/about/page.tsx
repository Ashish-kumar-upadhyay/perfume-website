'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1583467875263-d9e87993e262?q=80&w=2070"
          alt="Luxury Perfume Store"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <motion.div {...fadeIn}>
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">Our Story</h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl">
              Crafting Luxury Fragrances Since 1990
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto max-w-4xl px-4 py-16 text-center"
      >
        <h2 className="mb-6 text-3xl font-semibold">Our Mission</h2>
        <p className="text-lg text-gray-600">
          At LUXE, we believe that every fragrance tells a unique story. Our mission is to curate the finest perfumes from around the world, bringing you scents that evoke emotions, create memories, and define your signature style.
        </p>
      </motion.div>

      {/* Values Grid */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {/* Quality */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Exceptional Quality</h3>
              <p className="text-gray-600">
                We source only the finest ingredients and partner with renowned perfumers to create extraordinary fragrances.
              </p>
            </div>

            {/* Sustainability */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Sustainable Luxury</h3>
              <p className="text-gray-600">
                Our commitment to sustainability ensures that luxury and environmental responsibility go hand in hand.
              </p>
            </div>

            {/* Innovation */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Innovative Spirit</h3>
              <p className="text-gray-600">
                We continuously explore new scent combinations and techniques to push the boundaries of perfumery.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-12 text-3xl font-semibold">Our Experts</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Expert 1 */}
              <div>
                <div className="mb-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500"
                    alt="Sarah Johnson"
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-gray-600">Master Perfumer</p>
              </div>

              {/* Expert 2 */}
              <div>
                <div className="mb-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=500"
                    alt="David Chen"
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">David Chen</h3>
                <p className="text-gray-600">Fragrance Expert</p>
              </div>

              {/* Expert 3 */}
              <div>
                <div className="mb-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=500"
                    alt="Emma Davis"
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Emma Davis</h3>
                <p className="text-gray-600">Creative Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 