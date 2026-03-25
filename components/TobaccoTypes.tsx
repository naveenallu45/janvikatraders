'use client';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function TobaccoTypes() {
  const types = [
    {
      name: "Flue Cured Virginia (Traditional)",
      color: "Lemon",
      size: "Medium to Large",
      img: "/images/product-fcv-traditional.dim_600x400.jpg"
    },
    {
      name: "Flue Cured Virginia (Mysore)",
      color: "Lemon to Orange",
      size: "Large",
      img: "/images/product-fcv-mysore.dim_600x400.jpg"
    },
    {
      name: "HDBRG-Burley Tobacco",
      color: "Tan",
      size: "Medium to Heavy-Body",
      img: "/images/product-burley.dim_600x400.jpg"
    },
    {
      name: "Sun Cured Natural (Eluru)",
      color: "Brown to Dark Brown",
      size: "Heavy-Body",
      img: "/images/product-sun-cured-eluru.dim_600x400.jpg"
    },
    {
      name: "Chewing Tobacco (Red Chopadia)",
      color: "Greenish Light Brown",
      size: "Heavy-Body",
      img: "/images/product-chopadia.dim_600x400.jpg"
    },
    {
      name: "Sun Cured Natural (Kurnool)",
      color: "Lemon",
      size: "Medium to Large",
      img: "/images/product-sun-cured-kurnool.dim_600x400.jpg"
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-texture relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-900/30 text-primary-600 border border-primary-500 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Our Products
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            Premium <span className="text-primary-600">Tobacco</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {types.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary-100 hover:shadow-[0_8px_30px_rgb(189,140,65,0.15)] transition-all group"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-earth-950/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={type.img} 
                  alt={type.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-earth-950 mb-3 md:mb-4 uppercase tracking-wide h-auto sm:h-14">
                  {type.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Colour</span>
                    <span className="text-sm font-bold text-primary-600 truncate max-w-[60%] text-right">{type.color}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Leaf Size</span>
                    <span className="text-sm font-bold text-earth-900 truncate max-w-[60%] text-right">{type.size}</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 flex flex-row gap-2 sm:gap-3">
                  <a 
                    href={`tel:+919550260709`}
                    className="flex-1 flex justify-center items-center gap-1.5 sm:gap-2 bg-earth-900 hover:bg-earth-800 text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-colors font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider shadow-md"
                  >
                    <Phone size={14} className="sm:w-4 sm:h-4 w-3.5 h-3.5" /> <span>Call</span>
                  </a>
                  <a 
                    href={`https://wa.me/919550260709?text=${encodeURIComponent('Hello Janvika Traders, I want to inquire about your ' + type.name + '.')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-colors font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider shadow-md"
                  >
                    <MessageCircle size={14} className="sm:w-4 sm:h-4 w-3.5 h-3.5" /> <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
