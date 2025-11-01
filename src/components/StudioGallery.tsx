"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const galleryImages = [
  { src: "/images/guitar.jpeg", alt: "Peralatan Rekaman Profesional" },
  { src: "/images/mejastudio.jpeg", alt: "Ruang Mixing & Mastering MM Studio" },
  { src: "/images/drum.jpeg", alt: "Ruang Drum Studio MM" },
  
  { src: "/images/equalizer.jpeg", alt: "Peralatan Rekaman Profesional" },
  { src: "/images/microphone1.jpeg", alt: "Peralatan Rekaman Profesional" },
  { src: "/images/mejamakan.jpeg", alt: "Ruang Produksi Musik" },
]

export default function StudioGallery() {
  return (
    <section id="galeri" className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-black opacity-90 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 tracking-wide drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
            Galeri Studio MM
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            Intip suasana dan perlengkapan profesional di <span className="text-white">MM Studio Recording</span> — tempat di mana ide musikmu jadi kenyataan.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg shadow-red-900/30 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center">
                <p className="text-white text-sm md:text-base font-medium mb-4 px-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
