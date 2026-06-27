"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function FinalCTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.92, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 0.8, ease }}
        className="relative"
      >
        {/* Decorative floating dots */}
        <motion.div
          className="absolute -top-6 -left-6 w-3 h-3 rounded-full bg-apricot-wash/30 hidden md:block"
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-4 -right-8 w-4 h-4 rounded-full bg-dove/15 hidden md:block"
          animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 -right-4 w-2 h-2 rounded-full bg-dove/20 hidden md:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="bg-apricot-wash/30 rounded-[24px] py-16 px-6 sm:px-12 max-w-[900px] mx-auto border border-dove/20 shadow-none">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-[32px] sm:text-[40px]  font-bold text-ink leading-tight mb-6 max-w-[700px] mx-auto"
          >
            Mulai dari ide, lalu ubah menjadi PRD yang lebih rapi dan siap dipakai untuk membangun produk
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="text-[14px] md:text-[16px] text-ink/80  leading-relaxed max-w-[600px] mx-auto mb-10"
          >
            Gunakan bikinPRD untuk menyusun dokumen requirement yang lebih cepat, lebih terstruktur, dan lebih disukai oleh workflow AI coding Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{}}
            transition={{ duration: 0.5, delay: 0.5, ease }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Button variant="primary" size="lg" className="px-6 h-[42px] text-[14px]" asChild>
                <Link href="/new">Mulai bikin PRD</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
