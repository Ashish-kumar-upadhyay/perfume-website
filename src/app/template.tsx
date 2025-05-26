'use client'

import { CartProvider } from '@/context/CartContext'
import Navbar from './layout/Navbar'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>{children}</main>
      </CartProvider>
    </>
  )
} 