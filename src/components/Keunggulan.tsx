"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Clock,
  Headphones,
  Lightbulb,
  Video,
  CheckCircle2,
} from "lucide-react"

export default function Keunggulan() {
  const keunggulan = [
    {
      icon: <GraduationCap className="w-8 h-8 text-red-500" />,
      title: "Tim Profesional",
      text: "Beranggotakan Sarjana Musik yang berpengalaman di bidang audio & produksi musik.",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Sejak 2004",
      text: "Jam terbang tinggi dan pemahaman mendalam terhadap karakter serta kebutuhan klien.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-red-500" />,
      title: "Sound Berkualitas",
      text: "Karakter audio warm, transparan, dan detail — setara studio profesional internasional.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-red-500" />,
      title: "Pendekatan Solutif",
      text: "Edukasi dan arahan selama proses produksi, cocok untuk pemula maupun profesional.",
    },
    {
      icon: <Video className="w-8 h-8 text-red-500" />,
      title: "Audio & Visual Lengkap",
      text: "Semua layanan — dari recording, mixing, mastering hingga video clip — di satu tempat.",
    },
  ]

  return (
    <section
      id="keunggulan"
      className="py-20 bg-black text-white border-t border-neutral-800"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex justify-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/10 text-red-400 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-red-500">
            Keunggulan MM Studio
          </h3>
          <p className="text-gray-300 mt-3 text-base md:text-lg">
            Kenapa banyak musisi memilih kami?
          </p>
        </motion.div>

        {/* Grid Keunggulan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {keunggulan.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
