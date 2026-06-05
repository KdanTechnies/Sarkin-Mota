"use client";
import { motion } from "framer-motion";

const CarTrio = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
          STAND OUT FROM THE <br />
          <span className="text-gold">CROWD WITH SARKIN MOTA</span>
        </h2>
        <p className="text-gray-500 mb-12 uppercase text-xs tracking-widest">Request a callback from our specialist</p>
        
        <button className="bg-gold text-dark font-black px-10 py-3 rounded-full mb-20">Callback</button>

        <div className="relative flex justify-center items-end gap-0 md:-space-x-20">
          {/* Left Car */}
          <motion.img 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.6 }}
            src="https://images.unsplash.com/photo-1541348263662-e0c8de42d1ec?w=600" 
            className="w-1/3 h-auto z-10 hidden md:block"
          />
          {/* Middle Car (Focal Point) */}
          <motion.img 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800" 
            className="w-full md:w-1/2 h-auto z-20"
          />
          {/* Right Car */}
          <motion.img 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.6 }}
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600" 
            className="w-1/3 h-auto z-10 hidden md:block"
          />
        </div>
        
        {/* Ground Fog for the Trio */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-dark to-transparent z-30" />
      </div>
    </section>
  );
};

export default CarTrio;