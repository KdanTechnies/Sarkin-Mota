"use client";
import { motion } from "framer-motion";
import { Gauge, Calendar, Droplets } from "lucide-react";

const CARS = [
  { id: 1, name: "Mercedes-Benz G-Wagon", price: "₦185M", year: "2023", miles: "1,200km", img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800" },
  { id: 2, name: "Range Rover Velar", price: "₦75M", year: "2022", miles: "4,500km", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800" },
  { id: 3, name: "Lexus LX 570", price: "₦120M", year: "2021", miles: "8,000km", img: "https://images.unsplash.com/photo-1631248440049-760370d0322c?q=80&w=800" },
  { id: 4, name: "BMW M4 Competition", price: "₦95M", year: "2024", miles: "50km", img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800" },
  { id: 5, name: "Toyota Land Cruiser 300", price: "₦155M", year: "2023", miles: "0km", img: "https://images.unsplash.com/photo-1594568284297-7c64464062b1?q=80&w=800" },
  { id: 6, name: "Porsche 911 Carrera", price: "₦140M", year: "2022", miles: "2,100km", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800" },
];

const FeaturedCars = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden" id="inventory">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#D4AF3705,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-gold">Collection</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Watch luxury take shape. Our premium vehicles are arriving in style.
            </p>
          </motion.div>
          <button className="text-gold font-bold flex items-center gap-2 hover:gap-4 transition-all group">
            View All Inventory <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CARS.map((car, idx) => (
            <div key={car.id} className="relative group">
              {/* The "Water Drop" to "Car Card" Animation */}
              <motion.div
                initial={{ 
                  opacity: 0, 
                  y: -300, 
                  scaleY: 3, 
                  scaleX: 0.4, 
                  borderRadius: "100% 100% 100% 100% / 100% 100% 0% 0%",
                  filter: "blur(20px)" 
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scaleY: 1, 
                  scaleX: 1, 
                  borderRadius: "24px",
                  filter: "blur(0px)"
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  damping: 15,
                  stiffness: 80,
                  delay: idx * 0.15, // Staggered drop effect
                  duration: 1.2
                }}
                className="bg-white/5 border border-white/10 overflow-hidden backdrop-blur-md relative z-10"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: (idx * 0.15) + 0.5 }}
                    src={car.img} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-gold text-dark font-bold px-3 py-1 rounded-md text-xs tracking-tighter">
                    AVAILABLE
                  </div>
                </div>

                {/* Content Container */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: (idx * 0.15) + 0.7 }}
                  className="p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{car.name}</h3>
                  
                  <div className="flex gap-4 text-gray-400 text-sm mb-6">
                    <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded">
                      <Calendar size={14} className="text-gold" /> {car.year}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded">
                      <Gauge size={14} className="text-gold" /> {car.miles}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-t border-white/5 pt-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase font-bold">Price</span>
                      <span className="text-2xl font-bold text-gold">{car.price}</span>
                    </div>
                    <button className="bg-gold hover:bg-gold-light text-dark px-5 py-2.5 rounded-xl transition-all font-bold text-sm transform active:scale-95 shadow-lg shadow-gold/10">
                      View Details
                    </button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Splash/Shadow Effect when card lands */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx * 0.15) + 0.4, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-gold/20 blur-2xl rounded-full z-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;