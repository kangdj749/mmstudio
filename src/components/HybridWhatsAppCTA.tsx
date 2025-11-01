"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HybridWhatsAppCTA() {
  const whatsappNumber = "628122052200" // nomor WA admin MM Studio
  const [waLink, setWaLink] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const defaultMessage = `
Halo MM Studio 🎧,
saya ingin booking sesi rekaman / tanya layanan audio & video profesional.
`.trim()

      setWaLink(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
      )
    }
  }, [])

  if (!waLink) return null // biar aman pas SSR

  return (
    <>
      {/* Sticky CTA Bar (mobile only) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-4 shadow-2xl flex items-center justify-between rounded-t-2xl">
          <span className="font-semibold text-sm tracking-wide">
            🎵 Konsultasi & Booking Sesi MM Studio
          </span>
          <Button
            asChild
            className="bg-white text-red-600 font-semibold rounded-xl px-4 py-2 hover:bg-red-100 transition-all"
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Floating Button (desktop only) */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, type: "spring" }}
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 group"
      >
        <div className="bg-gradient-to-br from-red-600 to-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all group-hover:shadow-red-500/40 group-hover:scale-110">
          <MessageCircle className="w-7 h-7" />
        </div>
        <span className="absolute right-16 bg-neutral-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          Hubungi Admin
        </span>
      </motion.a>
    </>
  )
}
