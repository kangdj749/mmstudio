"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { PlayCircle, Mic2 } from "lucide-react"

export default function HeroMMStudio() {
  const [registrasiLink, setRegistrasiLink] = useState("/registrasi")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const ref = urlParams.get("ref")
      if (ref) {
        localStorage.setItem("ref", ref)
        setRegistrasiLink(`/registrasi?ref=${encodeURIComponent(ref)}`)
      } else {
        const stored = localStorage.getItem("ref")
        if (stored) {
          setRegistrasiLink(`/registrasi?ref=${encodeURIComponent(stored)}`)
        }
      }
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
      {/* Background Video / Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg_mmstudio.jpg"
          alt="MM Studio Recording Background"
          className="w-full h-full object-cover scale-105 brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-600/20 mix-blend-overlay"
        />
      </div>

      {/* Floating Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-3xl opacity-30 animate-pulse -z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 space-y-6 max-w-3xl mt-24 md:mt-32 mb-20 md:mb-32"
      >
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/30 shadow-red-900/30 shadow-lg backdrop-blur-md">
            <Mic2 className="w-10 h-10 text-red-400" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-extrabold leading-tight text-[clamp(2rem,6vw,3.6rem)]"
        >
          Rekam Lagu Kamu, Siap Publikasi — <br />
          <span className="text-red-400">Langsung dari MM Studio Bandung</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base md:text-lg text-gray-300/90 max-w-2xl mx-auto leading-relaxed"
        >
          Dari rekaman, aransemen, hingga video clip resmi — kami bantu kamu
          menghasilkan karya profesional yang siap tayang di{" "}
          <span className="font-semibold text-white">Spotify, YouTube,</span> dan pasar musik nasional maupun internasional.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button
            asChild
            className="bg-red-600 hover:bg-red-500 text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg shadow-red-900/30 hover:scale-105 transition-transform duration-300"
          >
            <a href={registrasiLink}>
              🎤 Book Session Sekarang
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border border-white/60 text-white hover:bg-white hover:text-black rounded-2xl px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
          >
            <a
              href="https://wa.me/628122052200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayCircle className="inline-block mr-2 w-5 h-5" />
              Konsultasi Gratis
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
