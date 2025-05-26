'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [isAdmin, setIsAdmin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await login(email, password, isAdmin)
      router.push('/')
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-[400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-[32px] mb-4">{isAdmin ? 'Admin Login' : 'Login'}</h1>
          <p className="text-[15px] text-gray-600">
            Welcome back! Please enter your details.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {error && (
            <div className="text-red-500 text-[15px] text-center">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-[15px] text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[15px] text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="mr-2"
              />
              <span className="text-[15px] text-gray-600">Login as Admin</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-[15px] text-black hover:text-gray-600"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg text-[15px] hover:bg-gray-800 transition-colors"
          >
            Sign In
          </button>

          <p className="text-center text-[15px] text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-black hover:text-gray-600">
              Sign Up
            </Link>
          </p>
        </motion.form>
      </div>
    </div>
  )
} 