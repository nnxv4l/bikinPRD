"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  }

  const headlineVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease },
    },
  }

  const bodyVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease },
    },
  }

  const buttonContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease },
    },
  }

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center overflow-hidden">
      {/* Warm radial glow — hero only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(251,225,209,0.35) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="mx-auto max-w-[800px] flex flex-col items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline — Signifier 64px */}
        <motion.h1
          variants={headlineVariants}
          className="text-[36px] sm:text-[48px] md:text-[64px] text-ink leading-[1.1] mb-6"
          style={{
            fontFamily: "var(--font-signifier)",
            letterSpacing: "-0.025em",
            fontWeight: 400,
          }}
        >
          Menulis PRD{" "}
          <motion.span
            className="line-through decoration-1 decoration-dove"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            lambat
          </motion.span>
          <br className="hidden sm:block" />
          <motion.span
            className="italic text-rust inline-block"
            style={{ fontFamily: "var(--font-signifier)" }}
            initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
          >
            jadi terstruktur
          </motion.span>{" "}
          dengan AI
        </motion.h1>

        {/* Subtitle — Sohne 18px */}
        <motion.p
          variants={bodyVariants}
          className="text-[16px] sm:text-[18px] text-ash max-w-[560px] mb-10 leading-[1.4]"
          style={{
            fontFamily: "var(--font-sohne)",
            letterSpacing: "-0.009em",
          }}
        >
          Ubah ide aplikasi Anda menjadi PRD yang rapi dan siap dipakai
          untuk workflow AI coding melalui{" "}
          <strong className="text-ink font-medium">3 fase guided flow</strong>.
          Hasilkan Markdown + ERD Mermaid dalam hitungan menit.
        </motion.p>

        {/* CTA — filled + text link */}
        <motion.div
          variants={buttonContainerVariants}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <motion.div
            variants={buttonVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/new">Mulai bikin PRD</Link>
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Button variant="textLink" asChild>
              <Link href="#contoh-prd">Lihat contoh PRD →</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
