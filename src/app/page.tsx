import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QueEsSection from "@/components/QueEsSection";
import ElProblemaSection from "@/components/ElProblemaSection";
import ObservatorioPreview from "@/components/ObservatorioPreview";
import PropuestaSection from "@/components/PropuestaSection";
import CartaSection from "@/components/CartaSection";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QueEsSection />
      <ElProblemaSection />
      <ObservatorioPreview />
      <PropuestaSection />
      <CartaSection />
      <BlogPreview />
      <Footer />
    </main>
  );
}
