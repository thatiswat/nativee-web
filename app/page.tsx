import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Platform from "@/components/home/Platform";
import Developer from "@/components/home/Developer";
import Enterprise from "@/components/home/Enterprise";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* What Nativee is */}
      <Platform />

      {/* Build with Nativee */}
      <Developer />

      {/* Scale with Nativee */}
      <Enterprise />

      {/* Final Call To Action */}
      <CTA />

      <Footer />
    </>
  );
}