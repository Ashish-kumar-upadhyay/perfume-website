'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import MegaMenu from './MegaMenu';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Shop All', href: '/shop' },
  { name: 'Bestsellers', href: '/bestsellers' },
  { name: 'Fragrance', href: '/fragrance' },
  { name: 'Skin + Hair', href: '/skin-hair' },
  { name: 'Discovery Sets', href: '/discovery-sets' },
  { name: 'Gifts + Sets', href: '/gifts' },
  { name: 'About Us', href: '/about' },
  { name: 'Perfect Perfume Quiz', href: '/quiz' },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if scrolled for transparent to solid background transition
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with logo */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              className="text-brand-dark"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center">
            <Link 
              href="/" 
              className="font-serif text-3xl tracking-wider text-brand-dark hover:opacity-80 transition-opacity"
            >
              PERFORM
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-brand-dark hover:opacity-70 transition-opacity">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-brand-dark hover:opacity-70 transition-opacity">
              <User className="h-5 w-5" />
            </button>
            <button className="text-brand-dark hover:opacity-70 transition-opacity">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="hidden md:flex justify-center pb-4">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  onMouseEnter={() => setActiveMenu(item.name)}
                  className={cn(
                    "text-sm tracking-wider py-2 hover:text-brand-dark transition-colors duration-200",
                    isScrolled ? "text-brand-dark" : "text-brand-dark",
                    activeMenu === item.name ? "font-medium" : "font-normal"
                  )}
                >
                  {item.name}
                </Link>
                {activeMenu === item.name && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mega Menu */}
      <div 
        className="relative"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {activeMenu && (
          <MegaMenu 
            category={activeMenu} 
            onClose={() => setActiveMenu(null)} 
          />
        )}
      </div>
    </header>
  );
}