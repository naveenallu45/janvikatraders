'use client';
import { motion } from 'framer-motion';
import { Users, BadgeCheck, Gavel, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Gavel size={32} />, title: "Auction Platform Buyer", desc: "Registered & verified buyer on major auction platforms" },
    { icon: <Users size={32} />, title: "Direct Farmer Sourcing", desc: "Working closely with growers for the best yield" },
    { icon: <BadgeCheck size={32} />, title: "ITB Registered", desc: "Fully compliant with Indian Tobacco Board regulations" },
    { icon: <Globe size={32} />, title: "DGFT Certification", desc: "Possessing Import-Export Code for global trade" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-earth-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-primary-900/30 text-primary-400 border border-primary-900 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6 md:mb-8">
              About <br /> <span className="text-primary-500">Janvika Traders</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                At the outset, we wish to introduce ourselves. We, the <strong>'Janvika Traders'</strong> are engaged in tobacco business over the past 8 years, having established and sustained business dealings both on national and international arena.
              </p>
              <p>
                Founded by <strong>Sri Ramakrishna Jarubula</strong>, a leading farmer with vast experience in tobacco farming and supply to leading companies in the industry. Our foundation is built on deep-rooted agricultural knowledge and unwavering commitment to quality.
              </p>
            </div>
          </motion.div>

          {/* Grid Stats feature boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-earth-900/50 border border-primary-900/30 p-6 md:p-8 rounded-xl md:rounded-2xl hover:bg-primary-900/20 hover:border-primary-500/50 transition-all group"
              >
                <div className="text-primary-500 mb-4 md:mb-6 bg-earth-950 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-earth-950 transition-all">
                  {stat.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 uppercase tracking-wide">{stat.title}</h3>
                <p className="text-gray-400 leading-relaxed text-xs md:text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
