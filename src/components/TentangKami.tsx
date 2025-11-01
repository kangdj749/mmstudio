"use client"

import { motion } from "framer-motion"
import { Music2 } from "lucide-react"

export default function TentangMMStudio() {
  return (
    <section
      id="tentang"
      className="py-20 bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-neutral-900/80 via-black/80 to-neutral-800/60 rounded-3xl border border-neutral-800 shadow-xl backdrop-blur-sm p-8 sm:p-12 text-center group transition-all duration-500 hover:shadow-red-900/30 hover:-translate-y-1">
            
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            
            {/* Icon + Heading */}
            <div className="relative flex flex-col items-center gap-4 mb-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-20 h-20 flex items-center justify-center rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 shadow-lg shadow-red-900/20"
              >
                <Music2 className="w-10 h-10" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug text-red-400">
                Studio Profesional dengan Alat Branded Internasional
              </h3>
              <div className="w-16 h-[2px] bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-full" />
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed space-y-6"
            >
              <p>
                <span className="font-semibold text-white">MM Studio Recording Bandung</span> 
                {" "}adalah studio profesional yang berdiri sejak{" "}
                <span className="font-semibold text-red-400">2004</span>, 
                berfokus pada layanan{" "}
                <span className="font-semibold text-white">audio dan visual musik</span>.
              </p>

              <p>
                Dengan peralatan <span className="font-semibold text-white">branded internasional</span> 
                dan tenaga ahli berlatar belakang{" "}
                <span className="font-semibold text-white">Sarjana Musik</span>, 
                kami menghasilkan karakter sound yang{" "}
                <span className="text-red-400 font-semibold">warm, transparan, dan detail</span>.
              </p>

              <p>
                Kami bukan hanya studio rekaman — kami adalah{" "}
                <span className="font-semibold text-red-400">partner kreatif</span> 
                yang membantu musisi dan penyanyi mewujudkan visi mereka 
                dari ide hingga karya siap rilis dengan standar profesional.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
