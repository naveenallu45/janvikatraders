'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Grading', href: '#grading' },
    { name: 'Features', href: '#features' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-earth-950/90 backdrop-blur-md shadow-lg border-b border-primary-900/30 py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-2 group">
          {/* Using text logo to be styled beautifully, since public logo path is not specified specifically yet */}
          <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-2 rounded-lg text-earth-950 group-hover:scale-110 transition-transform">
            <Leaf size={24} className="stroke-2" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-wider uppercase">
            Janvika <span className="text-primary-400 font-light">Traders</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-primary-400 transition-colors uppercase tracking-widest relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="mailto:info@janvikatraders.com"
            className="px-6 py-2 border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-earth-950 transition-all duration-300 rounded-full text-sm font-semibold uppercase tracking-wider"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-earth-950 border-b border-primary-900/50"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary-400 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="mailto:info@janvikatraders.com"
                className="inline-block mt-4 px-6 py-3 bg-primary-500 text-earth-950 text-center transition-all duration-300 rounded-full font-semibold uppercase tracking-wider"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
