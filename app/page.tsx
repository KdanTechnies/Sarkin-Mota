import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/WhyChooseUs"; // Your "We do what others can't" section
import CarTrio from "@/components/CarTrio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      
      {/* "We offer painting..." section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <h2 className="text-4xl font-bold uppercase tracking-tighter">
            We offer premium <span className="text-gold">automotive services</span> for all brands
          </h2>
          <p className="text-gray-500">
            Our efforts are focused on constantly honing skills and improving our selection process. We confidently guarantee exceptional quality.
          </p>
        </div>
      </section>

      <Services />
      <Features />
      <CarTrio />
      <Footer />
    </main>
  );
}