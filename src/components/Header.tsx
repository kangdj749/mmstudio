"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { name: "Beranda", href: "#hero", id: "hero" },
  { name: "Tentang", href: "#tentang", id: "tentang" },
  { name: "Masalah", href: "#masalah", id: "masalah" },
  { name: "Solusi", href: "#solusi", id: "solusi" },
  { name: "Keunggulan", href: "#keunggulan", id: "keunggulan" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    ) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((s) => s && observer.observe(s))
    return () => sections.forEach((s) => s && observer.unobserve(s))
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = -70
      const top = target.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl shadow-black/40" : ""
      }`}
    >
      {/* Background */}
      <div
        className={`backdrop-blur-xl border-b transition-all duration-300 ${
          scrolled
            ? "bg-black/95 border-red-900/50"
            : "bg-gradient-to-r from-black/90 via-neutral-900/85 to-neutral-950/90 border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/mmstudio.png"
                alt="MM Studio Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-wide text-white drop-shadow-[0_1px_6px_rgba(255,255,255,0.4)]">
              MM Studio
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-semibold text-sm uppercase tracking-wide transition-all group ${
                    active
                      ? "text-red-400"
                      : "text-white hover:text-red-300"
                  }`}
                  style={{
                    textShadow: active
                      ? "0 0 10px rgba(239,68,68,0.8)"
                      : "0 0 6px rgba(255,255,255,0.5)",
                  }}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                      active
                        ? "w-full bg-red-500"
                        : "w-0 group-hover:w-full bg-red-400/80"
                    }`}
                  ></span>
                </a>
              )
            })}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-red-400 transition-transform active:scale-90"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-red-900/40 shadow-lg"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => {
                const active = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-base font-medium tracking-wide transition-all ${
                      active
                        ? "text-red-400 font-semibold"
                        : "text-white hover:text-red-300"
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
