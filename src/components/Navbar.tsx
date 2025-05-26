import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">PERFORM</Link>
        <div className="flex gap-6">
          <Link href="/shop" className="hover:opacity-80">Shop All</Link>
          <Link href="/bestsellers" className="hover:opacity-80">Bestsellers</Link>
          <Link href="/fragrance" className="hover:opacity-80">Fragrance</Link>
          <Link href="/skin-hair" className="hover:opacity-80">Skin + Hair</Link>
          <Link href="/discovery-sets" className="hover:opacity-80">Discovery Sets</Link>
          <Link href="/gifts" className="hover:opacity-80">Gifts + Sets</Link>
          <Link href="/about" className="hover:opacity-80">About Us</Link>
          <Link href="/quiz" className="hover:opacity-80">Perfect Perfume Quiz</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;