"use client";
import { Car, Mail, Phone, MapPin, Globe, Share2, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gold p-1.5 rounded-lg">
                <Car className="text-dark" size={20} />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">
                Sarkin<span className="text-gold">Mota</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Nigeria's premier marketplace for luxury, verified, and affordable vehicles. Excellence in every drive.
            </p>
            <div className="flex gap-4">
              {/* Using generic Lucide icons that always exist */}
              {[
                { Icon: Globe, label: "Website" },
                { Icon: MessageCircle, label: "WhatsApp" },
                { Icon: Share2, label: "Share" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-dark transition-all duration-300"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              {["Inventory", "Sell Your Car", "Luxury Collection", "Car Financing", "About Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Inventory */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Top Brands</h4>
            <ul className="space-y-4 text-gray-500">
              {["Mercedes-Benz", "BMW", "Lexus", "Toyota", "Range Rover"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-start gap-3 text-sm italic">
                <MapPin size={18} className="text-gold shrink-0" /> 
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-gold shrink-0" /> 
                <span>+234 800 SARKIN MOTA</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-gray-400">
                <Mail size={18} className="text-gold shrink-0" /> 
                <span>info@sarkinmota.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center text-gray-600 text-xs tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Sarkin Mota Group. Engineered for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;