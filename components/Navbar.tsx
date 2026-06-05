"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Car } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-dark/80 backdrop-blur-md border-b border-gold/20 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-gold p-1.5 rounded-lg">
            <Car className="text-dark" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            SARKIN<span className="text-gold ml-1">MOTA</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {["Home", "Inventory", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-gold hover:bg-gold-light text-dark px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105">
            Browse Cars
          </button>
        </div>

        <div className="md:hidden text-white">
          <Menu size={28} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;