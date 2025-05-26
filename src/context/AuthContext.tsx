'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  isAdmin: boolean
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string, isAdmin: boolean) => Promise<void>
  signup: (name: string, email: string, password: string, isAdmin: boolean) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string, isAdmin: boolean) => {
    try {
      // TODO: Implement actual login API call
      // This is a mock implementation
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        isAdmin
      }
      
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const signup = async (name: string, email: string, password: string, isAdmin: boolean) => {
    try {
      // TODO: Implement actual signup API call
      // This is a mock implementation
      const mockUser: User = {
        id: '1',
        name,
        email,
        isAdmin
      }
      
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
    } catch (error) {
      console.error('Signup error:', error)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 