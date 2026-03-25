'use client';
import { Mail, MapPin, Phone, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-earth-950 border-t border-primary-900/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-2 rounded-lg text-earth-950">
                <Leaf size={24} className="stroke-2" />
              </div>
              <span className="text-2xl font-bold tracking-wider uppercase">
                Janvika <span className="text-primary-400 font-light">Traders</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              RAW TOBACCO SUPPLIERS · INDIA. <br />
              Premium raw tobacco supplier based in Andhra Pradesh, India. Supplying quality tobacco to global markets.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-primary-900/30 text-primary-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-primary-900/50">ITB Registered</span>
              <span className="px-3 py-1 bg-primary-900/30 text-primary-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-primary-900/50">DGFT Certified</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-widest relative after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-primary-400">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary-400 shrink-0 mt-0.5" />
                <span>+91 95502 60709</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary-400 shrink-0 mt-0.5" />
                <a href="mailto:info@janvikatraders.in" className="hover:text-primary-400 transition-colors">info@janvikatraders.in</a>
              </li>
              <li className="flex flex-col gap-3 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary-400 shrink-0 mt-0.5" />
                  <a href="https://maps.app.goo.gl/xfJbJt8Ctn1LG4DP8?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                    Andhra Pradesh, India
                  </a>
                </div>
                <div className="w-full h-40 md:h-48 rounded-xl overflow-hidden border border-primary-900/40 shadow-inner mt-2">
                  <iframe 
                    src="https://maps.google.com/maps?q=15.719750,80.018102&hl=en&z=14&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Janvika Traders Location"
                    className="transition-all duration-500"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-widest relative after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-primary-400">Business Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between border-b border-primary-900/30 pb-2">
                <span>Monday – Saturday</span>
                <span className="text-primary-400">9:00 AM – 6:00 PM IST</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sunday</span>
                <span className="text-red-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-900/30 text-center text-gray-500 text-sm flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4">
          <p>© {new Date().getFullYear()} Janvika Traders. All rights reserved.</p>
          
          <div className="flex items-center gap-1.5 font-medium bg-earth-900/30 px-5 py-2 rounded-full border border-primary-900/30 shadow-inner">
            Made with <span className="text-red-500 animate-pulse text-base">❤️</span> by 
            <a 
              href="https://www.staffarc.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-400 hover:text-primary-300 font-bold transition-colors ml-1 relative group"
            >
              StaffArc
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="space-x-6">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
