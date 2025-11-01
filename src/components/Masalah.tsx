"use client"

import { motion } from "framer-motion"
import {
  Music,
  Guitar,
  Waves,
  Mic2,
  DollarSign,
  AlertTriangle,
} from "lucide-react"

export default function Masalah() {
  const masalah = [
    {
      icon: <Music className="w-8 h-8 text-red-500" />,
      text: "Belum punya lagu atau ide musik yang matang.",
    },
    {
      icon: <Guitar className="w-8 h-8 text-red-500" />,
      text: "Tidak ada musisi yang bisa bantu rekam dengan skill profesional.",
    },
    {
      icon: <Waves className="w-8 h-8 text-red-500" />,
      text: "Bingung bagaimana membuat musik yang harmonis & enak didengar.",
    },
    {
      icon: <Mic2 className="w-8 h-8 text-red-500" />,
      text: "Tidak tahu teknik vokal yang tepat agar hasil rekaman maksimal.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
      text: "Tidak paham bagaimana melanjutkan karya agar punya nilai ekonomi & royalti.",
    },
  ]

  return (
    <section id="masalah" className="py-20 bg-black text-white border-t border-neutral-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex justify-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/10 text-red-400 mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-red-500">
            Masalah Umum yang Dihadapi Calon Musisi
          </h3>

          <p className="text-base md:text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
            Banyak calon musisi punya potensi besar, tapi sering terhenti karena kendala seperti:
          </p>
        </motion.div>

        {/* Grid List Masalah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {masalah.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-gray-300 text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
