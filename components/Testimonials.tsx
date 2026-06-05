"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Alhaji Bukar",
    role: "Business Mogul",
    text: "The procurement process was seamless. Sarkin Mota handled everything from inspection to delivery in Abuja. Highly recommended!",
    stars: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
  },
  {
    name: "Chidi Okechukwu",
    role: "Tech Entrepreneur",
    text: "Found my dream M4 Competition here. The car was exactly as described. The most transparent dealers in Nigeria.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
  },
  {
    name: "Fatima Yusuf",
    role: "Creative Director",
    text: "Luxury at its peak. I love my Range Rover Velar. The customer service team was professional and very helpful.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">What Our <span className="text-gold">Clients</span> Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 relative"
            >
              <Quote className="text-gold/20 absolute top-6 right-6" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, s) => (
                  <Star key={s} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold" />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-gold text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;