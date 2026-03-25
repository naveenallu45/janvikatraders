'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Venkateswarlu",
      company: "Guntur Tobacco Core",
      review: "Quality is unmatched. The Flue Cured Virginia from Janvika Traders has significantly improved our product consistency. Exceptional service and very trustworthy."
    },
    {
      name: "Srinivasa Rao",
      company: "Prakasam Exports",
      review: "We have been sourcing from Janvika Traders for 4 years now. Their direct farmer sourcing ensures we always get the best pricing without quality compromise."
    },
    {
      name: "Ramesh Reddy",
      company: "Kurnool Traders",
      review: "Timely delivery is critical for our export business, and Janvika never fails. Highly professional logistics and perfect tobacco grading."
    },
    {
      name: "Appa Rao",
      company: "Coastal Tobacco Corp",
      review: "Their expertise in the industry shows. Very responsive, clear communication, and the finest Sun Cured Natural tobacco we've seen on the market."
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100/50 text-primary-600 border border-primary-200 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-earth-950 uppercase tracking-tight mt-2">
              Client <span className="text-primary-600">Reviews</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-texture p-6 md:p-10 rounded-2xl md:rounded-3xl border border-primary-200 shadow-xl shadow-earth-900/5 relative group"
            >
              <Quote className="absolute top-4 right-4 md:top-8 md:right-8 text-primary-200 w-10 h-10 md:w-16 md:h-16 group-hover:scale-110 group-hover:text-primary-300 transition-all opacity-50" />
              
              <div className="relative z-10">
                <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-6 md:mb-8 italic">
                  "{rev.review}"
                </p>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-neutral-900 uppercase tracking-wide">{rev.name}</h4>
                  <p className="text-primary-600 font-semibold uppercase text-[10px] md:text-xs tracking-widest mt-1">{rev.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
