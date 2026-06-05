"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Fog */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] fog-glow z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4"
        >
          DRIVE THE LUXURY <br />
          <span className="text-gold">TO THE MAXIMUM</span>
        </motion.h1>
        
        <p className="text-gray-400 max-w-lg mx-auto mb-8 text-sm md:text-base">
          We offer a curated selection of premium vehicles, from performance supercars to luxury SUVs. Experience perfection.
        </p>

        <button className="bg-gold text-dark font-black px-12 py-3 rounded-full hover:scale-105 transition-transform uppercase text-xs tracking-widest">
          Explore Stock
        </button>

        {/* Hero Car Image (GTR Style) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 w-full max-w-5xl mx-auto"
        >
          <img 
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200" 
            alt="Hero Car" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;