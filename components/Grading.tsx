'use client';
import { motion } from 'framer-motion';

export default function Grading() {
  const sections = [
    {
      title: "AIR CURED BURLEY GRADING DESCRIPTION",
      images: [
        "https://arestobacco.com/wp-content/uploads/2020/11/tobacco-grading-1-scaled-1.jpg"
      ]
    },
    {
      title: "FLUE CURED VIRGINIA GRADING DESCRIPTION",
      images: [
        "https://arestobacco.com/wp-content/uploads/2020/11/tobacco-grading-2-scaled-1.jpg",
        "https://arestobacco.com/wp-content/uploads/2021/02/tobacco-grading-3-update.jpg"
      ]
    },
    {
      title: "ORIENTAL GRADING DESCRIPTION",
      images: [
        "https://arestobacco.com/wp-content/uploads/2020/10/tobacco-grading-4.jpg"
      ]
    }
  ];

  return (
    <section id="grading" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100/50 text-primary-700 border border-primary-200 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Quality Standards
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-black text-earth-950 uppercase tracking-tight"
          >
            Tobacco <span className="text-primary-600">Grading</span>
          </motion.h2>
        </div>

        <div className="space-y-20">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-earth-900 mb-8 uppercase tracking-widest text-center border-b-2 border-primary-500 pb-4 inline-block">
                {section.title}
              </h3>
              
              <div className="w-full flex flex-col gap-8">
                {section.images.map((imgSrc, imgIdx) => (
                  <div key={imgIdx} className="w-full overflow-hidden rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-2 bg-white">
                    <img 
                      src={imgSrc} 
                      alt={section.title} 
                      className="w-full h-auto object-contain rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
