"use client"

import { Youtube, Instagram, Phone } from "lucide-react"

export default function FooterContact() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        
        {/* Info Studio */}
        <div className="flex-1">
          <h4 className="text-lg md:text-xl font-semibold text-red-400">MM Studio Recording</h4>
          <p className="mt-2 text-gray-400">
            Jl. Pandanwangi No.10, Bandung Timur, Jawa Barat<br/>
            Indonesia
          </p>
          <p className="mt-2 text-gray-400 flex items-center gap-2">
            <Phone className="w-4 h-4 text-red-400" />
            <a href="https://wa.me/6281205202000" className="underline hover:text-red-400">
              0812-2052-2000
            </a>
          </p>

          <div className="mt-3 flex flex-col space-y-1">
            <a
              href="https://www.instagram.com/mmstudiorecording/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition"
            >
              <Instagram className="w-4 h-4 text-red-400" />
              @mmstudiorecording
            </a>

            <a
              href="https://www.youtube.com/@AditMMofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition"
            >
              <Youtube className="w-4 h-4 text-red-400" />
              YouTube: AditMMofficial
            </a>
          </div>
        </div>

        {/* Links & Navigasi */}
        <div className="flex-1 flex flex-col md:items-center space-y-4">
          <h5 className="text-md font-semibold text-gray-300">Navigasi Cepat</h5>
          <a href="#solusi" className="text-gray-400 hover:text-red-400">Layanan</a>
          <a href="#masalah" className="text-gray-400 hover:text-red-400">Masalah</a>
          <a href="#keunggulan" className="text-gray-400 hover:text-red-400">Keunggulan</a>
          <a href="#hero" className="text-gray-400 hover:text-red-400">Book Session</a>
        </div>

        {/* Copyright */}
        <div className="flex-1 text-gray-500 text-sm md:text-right">
          <p>© {new Date().getFullYear()} MM Studio Recording. All rights reserved.</p>
          <p className="mt-2">Privacy & Terms</p>
        </div>
      </div>
    </footer>
  )
}
