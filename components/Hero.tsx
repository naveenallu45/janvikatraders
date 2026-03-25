'use client';
import { motion } from 'framer-motion';
import { FileBadge, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-8 md:pt-32 md:pb-12 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-earth-950/80 bg-gradient-to-r from-earth-950 via-earth-950/80 to-emerald-900/40 mix-blend-multiply z-10" />
        {/* Placeholder image for a tobacco farm or rich tobacco texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596707323565-1d4493e8a7bc?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-texture opacity-20 z-10 mix-blend-overlay" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="px-4 py-1.5 bg-primary-900/40 text-primary-400 border border-primary-500/30 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">8+ Years of Excellence</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 uppercase leading-[1.1] tracking-tight"
          >
            Premium Raw <br />
            <span className="text-gradient">Tobacco</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl leading-relaxed"
          >
            Export-ready, high-quality raw tobacco sourced directly from farmers. Delivering excellence to global markets with precision and trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 items-center mb-10 md:mb-12"
          >
            <Link 
              href="#products"
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-gradient-to-r from-primary-500 to-emerald-400 text-earth-950 font-bold uppercase tracking-wider rounded-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
            >
              Our Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#about"
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-earth-900/50 text-white border border-primary-500/30 font-bold uppercase tracking-wider rounded-lg hover:bg-primary-900/50 transition-all backdrop-blur-sm text-center text-sm md:text-base"
            >
              Who We Are
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider"
          >
            <div className="flex items-center gap-2">
              <FileBadge className="text-primary-400" size={24} />
              <span>ITB Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-primary-400" size={24} />
              <span>DGFT Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary-400/20 flex items-center justify-center border border-primary-400">
                <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              </div>
              <span>Export Ready</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative gradient blur at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-earth-950 to-transparent z-10" />
    </section>
  );
}
