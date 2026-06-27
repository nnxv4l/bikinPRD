"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease }}
      className="sticky top-0 z-50 w-full bg-pure-white/90 backdrop-blur-md border-b border-dove/30"
    >
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] font-medium text-ink tracking-[-0.009em]"
              style={{ fontFamily: "var(--font-sohne)" }}
            >
              bikinPRD
            </motion.span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {[
              { href: "#fitur", label: "Fitur" },
              { href: "#cara-kerja", label: "Cara Kerja" },
              { href: "#contoh-prd", label: "Contoh PRD" },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="text-[15px] text-ink hover:text-ash transition-colors tracking-[-0.009em]"
                  style={{ fontFamily: "var(--font-sohne)" }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/login"
              className="text-[15px] font-[450] text-ink hover:text-ash transition-colors tracking-[-0.009em]"
              style={{ fontFamily: "var(--font-sohne)" }}
            >
              Masuk
            </Link>
            <Button variant="primary" size="default" asChild>
              <Link href="/new">Mulai bikin PRD</Link>
            </Button>
          </div>
          <button className="md:hidden text-ink p-2 -mr-2">
            <Menu className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </motion.header>
  )
}
