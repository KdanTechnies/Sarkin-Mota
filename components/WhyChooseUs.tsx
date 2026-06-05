"use client";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Truck, Users } from "lucide-react";

const FEATURES = [
  { icon: ShieldCheck, title: "Verified Vehicles", desc: "Every car undergoes a multi-point inspection by professionals." },
  { icon: CreditCard, title: "Secure Payments", desc: "Multiple payment options with full buyer protection." },
  { icon: Truck, title: "Nationwide Delivery", desc: "We deliver your dream car to your doorstep anywhere in Nigeria." },
  { icon: Users, title: "Trusted Dealers", desc: "Partnering only with certified and highly-rated dealerships." },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-[#0F0F0F]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Choose Sarkin Mota?</h2>
        <div className="w-20 h-1 bg-gold mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-colors group"
          >
            <f.icon className="text-gold mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;