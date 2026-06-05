"use client";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-gold/20 to-dark border border-gold/30 p-12 md:p-20 text-center"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Find Your Next <span className="text-gold">Masterpiece</span> Today</h2>
            <p className="text-gray-300 text-lg mb-10">
              Browse hundreds of verified vehicles and drive home your dream car with flexible financing options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gold text-dark px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Explore All Cars
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;