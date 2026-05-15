import { Navbar } from "@/components/portfolio/Navbar";
import { Contact as ContactSection } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-[#f0ede8]">
      <Navbar />
      <main className="pt-24">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
