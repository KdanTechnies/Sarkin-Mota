const BRANDS = ["Mercedes-Benz", "BMW", "Toyota", "Lexus", "Honda", "Ford", "Audi", "Range Rover"];

const Brands = () => (
  <div className="py-12 bg-dark/50 border-y border-white/5 overflow-hidden">
    <div className="flex animate-scroll whitespace-nowrap">
      {[...BRANDS, ...BRANDS].map((brand, i) => (
        <span key={i} className="mx-12 text-2xl font-bold text-gray-600 hover:text-gold transition-colors uppercase tracking-widest">
          {brand}
        </span>
      ))}
    </div>
  </div>
);

export default Brands;