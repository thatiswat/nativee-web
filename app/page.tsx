import Navbar from "@/components/Navbar";
import Hero from "@/app/website/components/Hero";
import TrustStrip from "@/app/website/components/TrustStrip";
import Languages from "@/app/website/components/Languages";
import ProductModes from "@/app/website/components/ProductModes";
import CTA from "@/app/website/components/CTA";
import Footer from "@/app/website/components/Footer";

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