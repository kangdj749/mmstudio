"use client"

import { motion } from "framer-motion"
import { Quote, Star, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimoniDanCTA() {
  return (
    <>
      {/* ✅ SECTION TESTIMONI */}
      <section
        id="testimoni"
        className="py-20 bg-gradient-to-b from-black via-neutral-900 to-black text-white border-t border-neutral-800"
      >
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/10 text-red-400">
                <Quote className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-red-500">
              Apa Kata Mereka? 💬
            </h3>
            <p className="text-gray-300 mt-3 text-base md:text-lg">
              Cerita nyata dari para musisi & kreator yang sudah merasakan kualitas MM Studio.
            </p>
          </motion.div>

          {/* Grid Testimoni */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                nama: "Rizky A",
                profesi: "Solo Singer — Bandung",
                testimoni:
                  "MM Studio bantu saya dari nol — dari bikin lagu, rekaman, sampai rilis di Spotify. Hasilnya profesional banget tapi tetap hangat dan personal.",
              },
              {
                nama: "Project Band 88",
                profesi: "Indie Band",
                testimoni:
                  "Aransemen dan mixing-nya kelas pro. Sekarang lagu kami sudah naik ke chart indie nasional!",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative bg-neutral-900/70 border border-neutral-800 rounded-3xl p-8 shadow-lg hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="absolute -top-5 left-6 text-red-400 opacity-80">
                  <Quote className="w-8 h-8" />
                </div>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                  “{item.testimoni}”
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div>
                    <span className="font-semibold text-white">{item.nama}</span>
                    <p className="text-gray-400">{item.profesi}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ SECTION CTA AKHIR */}
      <section
        id="cta"
        className="py-24 bg-gradient-to-b from-red-950 via-black to-neutral-950 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/bg_soundwave.svg')] opacity-5 bg-cover bg-center -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="container mx-auto px-6 md:px-12 text-center max-w-3xl space-y-6"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/10 text-red-400">
              <Music className="w-8 h-8" />
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-red-400 leading-tight">
            🎧 Siap Mulai Rekaman Profesionalmu di Bandung?
          </h3>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Dari ide sederhana sampai lagu siap rilis,
            <br className="hidden sm:block" />
            <span className="font-semibold text-white">MM Studio</span> bantu kamu mewujudkan karya terbaikmu
            dengan dukungan tim musik & video profesional.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              className="bg-red-600 hover:bg-red-500 text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg shadow-red-900/30 hover:scale-105 transition-all duration-300"
            >
              <a href="/registrasi" target="_blank" rel="noopener noreferrer">
                🎵 Book Session Sekarang
              </a>
            </Button>
          </motion.div>

          <p className="text-gray-400 text-sm mt-4">
            
          </p>
        </motion.div>
      </section>
    </>
  )
}
