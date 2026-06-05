"use client";
import { motion } from "framer-motion";

const SERVICES = [
  { title: "Direct Sales", img: "/images/byd.webp" },
  { title: "Custom Import", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600" },
  { title: "Verification", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600" },
  { title: "Car Spa", img: "/images/tesla.webp" },
];

const Services = () => (
  <section className="py-24 bg-dark">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold uppercase mb-12 border-l-4 border-gold pl-4">Exclusive Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative h-64 rounded-2xl overflow-hidden glass-card group cursor-pointer"
          >
            <img src={s.img} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold uppercase tracking-widest">{s.title}</h3>
              <p className="text-gold text-xs mt-2">Learn More —</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;