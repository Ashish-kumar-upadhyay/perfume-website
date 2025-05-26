'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/context/CartContext'
import PaymentSection from '@/components/PaymentSection'

export default function CartPage() {
  const router = useRouter()
  const { cart, removeFromCart, updateQuantity, clearCart, totalAmount } = useCart()
  const [showPayment, setShowPayment] = useState(false)
  const [orderId] = useState(`ORD${Date.now()}`)

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity)
    }
  }

  const handleCheckout = () => {
    setShowPayment(true)
  }

  const handlePaymentSuccess = () => {
    clearCart()
    router.push('/order-success')
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-32">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="mb-8 text-3xl font-semibold">Your Cart is Empty</h1>
          <button
            onClick={() => router.push('/shop')}
            className="rounded-lg bg-black px-8 py-3 text-white hover:bg-gray-800"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-semibold">Shopping Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 rounded-lg border border-gray-200 p-6"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="mt-1 text-gray-600">₹{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="rounded-full p-1 hover:bg-gray-100"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="rounded-full p-1 hover:bg-gray-100"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 rounded-full p-1 text-red-500 hover:bg-red-50"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            {showPayment ? (
              <PaymentSection
                amount={totalAmount}
                orderId={orderId}
                onSuccess={handlePaymentSuccess}
              />
            ) : (
              <div className="rounded-lg border border-gray-200 p-6">
                <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
                <div className="mb-4 flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
                <div className="mb-4 flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="mb-4 border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">₹{totalAmount.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 