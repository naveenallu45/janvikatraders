'use client';
import { motion } from 'framer-motion';
import { Award, Clock, Truck, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "Expert Team",
      desc: "Our team has 8 years of hands-on experience in tobacco farming, curing, and supply logistics.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Reasonable Price & Quality",
      desc: "We ensure competitive pricing without compromising on the superior quality standards our customers expect.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Trusted by 50+ Clients",
      desc: "Our reputation spans continents, with satisfied customers from Asia to Europe and beyond.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Fast & Timely Delivery",
      desc: "We handle all logistics with precision to ensure your consignment arrives on time, every time.",
      icon: <Truck className="w-8 h-8" />
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-earth-950 text-white relative">
      <div className="absolute inset-0 bg-texture opacity-30 mix-blend-overlay" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-900/40 text-primary-400 border border-primary-500/30 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Our Guarantee
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white"
          >
            Why Choose <span className="text-primary-500">Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
             <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-earth-900 border border-primary-900/50 p-6 md:p-8 rounded-xl md:rounded-2xl group hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 relative overflow-hidden"
            >
               {/* Decorative background leaf AI image faintly in background of cards */}
               <div className="absolute -right-8 -bottom-8 md:-right-12 md:-bottom-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                  <img src="/images/tobacco_leaf.png" className="w-32 h-32 md:w-48 md:h-48 object-cover grayscale" alt="Tobacco Texture" />
               </div>

               <div className="text-earth-950 bg-gradient-to-br from-primary-400 to-emerald-600 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] group-hover:scale-110 group-hover:rotate-3 transition-all relative z-10">
                 {feature.icon}
               </div>
               <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-wide text-white relative z-10">{feature.title}</h3>
               <p className="text-gray-400 leading-relaxed text-xs md:text-sm relative z-10">{feature.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
