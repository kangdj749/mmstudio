"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  const [waLink, setWaLink] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const nama = params.get("nama") || ""
      const layanan = params.get("layanan") || ""
      const paket = params.get("paket") || ""
      const jadwal = params.get("jadwal") || ""
      const nohp = params.get("nohp") || ""

      const pesan = `
Halo Admin MM Studio 🎶
Saya *${nama}* baru saja melakukan registrasi melalui website.

Detail registrasi saya:
🎧 Layanan: ${layanan}
📅 Jadwal: ${jadwal}
📱 No HP: ${nohp}

Mohon konfirmasi dan informasi lebih lanjut ya. Terima kasih 🙏
      `

      setWaLink(
        `https://wa.me/628122052200?text=${encodeURIComponent(pesan)}`
      )
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md"
      >
        <CheckCircle className="mx-auto mb-4 text-green-500 w-16 h-16" />
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Terima Kasih Telah Registrasi! 🙌
        </h1>
        <p className="text-gray-300 leading-relaxed mb-6">
          Kami sudah menerima data registrasimu.
          <br />
          Tim MM Studio akan segera menghubungi kamu untuk konfirmasi dan jadwal sesi rekaman 🎙️
        </p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-black font-semibold rounded-xl px-6 py-3"
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2 inline-block" />
              Hubungi Admin Sekarang
            </a>
          </Button>
        </motion.div>

        <p className="mt-6 text-sm text-gray-400">
          Jika ada hal yang ingin kamu pastikan, langsung klik tombol di atas
          untuk chat dengan admin MM Studio 🎵
        </p>
      </motion.div>
    </section>
  )
}
