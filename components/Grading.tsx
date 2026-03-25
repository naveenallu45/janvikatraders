'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Leaf, Droplets, Sun, Wind } from 'lucide-react';

export default function Grading() {
  const [activeTab, setActiveTab] = useState(0);

  const gradingData = [
    {
      title: "Flue Cured Virginia Grading",
      icon: <Sun className="w-6 h-6" />,
      description: "Flue-cured Virginia (FCV) tobacco is the most widely grown tobacco. Grading relies strongly on stalk position, rich color, texture, and leaf size. High-quality leaves are generally lemon to orange, possessing high elasticity and low blemish percentages.",
      factors: [
        { name: "Stalk Position", value: "Primings (P), Lugs (X), Cutters (C), Leaf (B), Tips (T)" },
        { name: "Color Index", value: "Lemon (L), Orange (F), Light Mahogany (FR), Dark (D)" },
        { name: "Quality Scale", value: "1 (Premium) to 5 (Low/Scrap)" }
      ]
    },
    {
      title: "Air Cured Burley Grading",
      icon: <Wind className="w-6 h-6" />,
      description: "Burley tobacco is naturally air-cured inside well-ventilated barns. The grading system evaluates the thickness, nicotine ratio, and natural oils of the leaf. Burley leaves are characteristically porous with absorbing capabilities for casing.",
      factors: [
        { name: "Stalk Position", value: "Flyings (X), Lugs (C), Leaf (B), Tips (T)" },
        { name: "Color Index", value: "Light/Buff (L), Tan (F), Red (R), Dark Red (D)" },
        { name: "Texture", value: "Light body to heavy, robust thickness" }
      ]
    },
    {
      title: "Oriental Grading",
      icon: <Droplets className="w-6 h-6" />,
      description: "Oriental tobaccos are distinctively small-leafed and sun-cured. Known for intense aromatic qualities, moisture retention, and low burning rates. Grading highly depends on the growing region and the intensity of botanical aroma.",
      factors: [
        { name: "Key Grades", value: "Basma, Katerini, Izmir, Prilep" },
        { name: "Aroma Profile", value: "Mildly sweet to highly pungent & spicy" },
        { name: "Leaf Size", value: "Small (Premium) to Medium (Standard)" }
      ]
    }
  ];

  return (
    <section id="grading" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
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
            Tobacco <span className="text-primary-600">Grading System</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto mt-4 text-neutral-600">
            We strictly adhere to international quality benchmarks, ensuring every leaf is classified with precision according to its curing method, stalk position, and color.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Tabs Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {gradingData.map((grade, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-left ${
                  activeTab === index 
                  ? 'bg-gradient-to-r from-primary-500 to-emerald-400 text-white shadow-lg shadow-primary-500/30 translate-x-2 border-transparent' 
                  : 'bg-texture text-earth-900 border border-earth-900/10 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                <div className={`${activeTab === index ? 'text-white' : 'text-primary-600'}`}>
                  {grade.icon}
                </div>
                <span>{grade.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-earth-950 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Background watermark */}
              <Leaf className="absolute -right-10 -top-10 text-earth-900 w-64 h-64 rotate-45 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary-400 to-emerald-600 rounded-xl text-white shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                    {gradingData[activeTab].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                    {gradingData[activeTab].title}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                  {gradingData[activeTab].description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-primary-400 font-bold uppercase tracking-widest text-sm mb-4">Grading Factors</h4>
                  {gradingData[activeTab].factors.map((factor, idx) => (
                    <div key={idx} className="bg-earth-900/50 border border-primary-900/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-gray-400 text-sm md:text-base font-semibold uppercase tracking-wider">{factor.name}</span>
                      <span className="text-white font-medium text-right text-sm md:text-base">{factor.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
