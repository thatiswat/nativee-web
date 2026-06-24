import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Languages from "@/components/Languages";
import ProductModes from "@/components/ProductModes";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <TrustStrip />

      <Languages />

      <ProductModes />

      <CTA />

      <Footer />
    </main>
  );
}