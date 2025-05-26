'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function SignupPage() {
  const router = useRouter()
  const { signup } = useAuth()
  const [isAdmin, setIsAdmin] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      await signup(formData.name, formData.email, formData.password, isAdmin)
      router.push('/')
    } catch (err) {
      setError('Failed to create account')
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
          <h1 className="text-[32px] mb-4">{isAdmin ? 'Admin Sign Up' : 'Sign Up'}</h1>
          <p className="text-[15px] text-gray-600">
            Create your account to get started.
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
            <label htmlFor="name" className="block text-[15px] text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[15px] text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-[15px] text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="flex items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="mr-2"
              />
              <span className="text-[15px] text-gray-600">Register as Admin</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg text-[15px] hover:bg-gray-800 transition-colors"
          >
            Create Account
          </button>

          <p className="text-center text-[15px] text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-black hover:text-gray-600">
              Sign In
            </Link>
          </p>
        </motion.form>
      </div>
    </div>
  )
} 