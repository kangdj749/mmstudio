"use client"

import { motion } from "framer-motion"
import { Music2, Settings, Clapperboard, Mic2, GraduationCap, Handshake } from "lucide-react"

export default function Solusi() {
  const solutions = [
    {
      icon: <Music2 className="w-6 h-6" />,
      title: "Pembuatan Lagu dari Nol",
      desc: "Arransemen, komposisi, dan lirik dengan sentuhan profesional.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Recording, Mixing, & Mastering Profesional",
      desc: "Hasil dengan standar broadcast dan Spotify-ready.",
    },
    {
      icon: <Clapperboard className="w-6 h-6" />,
      title: "Pembuatan Video Clip Official",
      desc: "Kualitas mulai dari kelas menengah hingga setara Netflix standard.",
    },
    {
      icon: <Music2 className="w-6 h-6" />,
      title: "Scoring Musik",
      desc: "Untuk film, serial, FTV, dan berbagai kebutuhan audio visual.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Vocal & Music Direction",
      desc: "Pendampingan langsung agar hasil rekaman maksimal.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Konsultasi Hak Ekonomi & Distribusi Digital",
      desc: "Bimbingan agar karya kamu punya nilai di pasar musik nasional & internasional.",
    },
  ]

  return (
    <section
      id="solusi"
      className="py-20 bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          {/* Heading */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/10 text-red-400">
              <Music2 className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-red-500">
            Solusi dari MM Studio 🔥
          </h3>
          <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
            Di <span className="text-white font-semibold">MM Studio</span>, semua proses kamu kami bantu dari awal hingga akhir.
          </p>
        </motion.div>

        {/* Grid Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-neutral-900/60 hover:bg-neutral-800/80 transition-all p-6 rounded-2xl border border-neutral-800 hover:border-red-500/30 shadow-lg hover:shadow-red-900/20"
            >
              <div className="flex items-center gap-4 mb-3 text-red-400 group-hover:text-red-500 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-500/10">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
