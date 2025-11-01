"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Header"
import Hero from "@/components/Hero"
import TentangKami from "@/components/TentangKami"
import Footer from "@/components/Footer"
import HybridWhatsAppCTA from "@/components/HybridWhatsAppCTA"
import dynamic from "next/dynamic"
import Masalah from "@/components/Masalah";
import Keunggulan from "@/components/Keunggulan";
import TestimoniDanCTA from "@/components/TestimoniCTA";
import Solusi from "@/components/Solusi";
import StudioGallery from "@/components/StudioGallery";


interface SheetData {
  [key: string]: { elements: any[] };
}

const LandingPage: React.FC = () => {
  const [sheetData, setSheetData] = useState<SheetData>({});
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const sheetId = "YOUR_SPREADSHEET_ID";
    const sections = ["Hero", "Fitur", "Harga", "Kontak", "Testimoni"];

    const fetchSheetData = async () => {
      try {
        const data: SheetData = {};
        await Promise.all(
          sections.map(async (section) => {
            const response = await fetch(`https://opensheet.elk.sh/${sheetId}/${section}`);
            const json = await response.json();
            data[section] = { elements: json };
          })
        );
        setSheetData(data);
      } catch (err) {
        console.error("Error fetching sheet data:", err);
      }
    };

    fetchSheetData();
  }, []);

  return (
    <main className="relative">
          {/* Navbar */}
          <Navbar />
    
          {/* Hero */}
          <section id="hero">
            <Hero />
          </section>
    
          {/* Tentang Kami */}
          <section id="tentang">
            <TentangKami />
          </section>

          {/* Masalah */}
          <section id="masalah">
            <Masalah />
          </section>
    
          {/* Solusi */}
          <section id="solusi">
            <Solusi />
          </section>

          {/* Keunggulan */}
          <section id="keunggulan">
            <Keunggulan />
          </section>

          {/* Galery */}
          <section id="galeri">
            <StudioGallery />
          </section>

          {/* Testimoni */}
          <section id="testimoni">
            <TestimoniDanCTA />
          </section>

                                     
          {/* Footer */}
          <Footer />
          {/* WhatsApp CTA hybrid */}
          <HybridWhatsAppCTA />

        </main>
  );
};

export default LandingPage;
