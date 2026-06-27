"use client"
import * as React from "react"
import { Lightbulb, Layers, MessageSquare, Sparkles, PencilRuler } from "lucide-react"
import { motion, useInView } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Langkah 1 — Input Ide",
    description: "Tuliskan ide aplikasi Anda dan pilih bahasa output untuk PRD."
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Langkah 2 — Preferensi Teknologi",
    description: "Pilih stack teknologi sendiri atau biarkan AI yang merekomendasikan stack terbaik."
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Langkah 3 — Pertanyaan Dinamis",
    description: "AI menanyakan detail spesifik yang mungkin Anda lewatkan untuk memperjelas konteks."
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Langkah 4 — Generate PRD",
    description: "Sistem menyusun PRD lengkap dalam format Markdown beserta ERD Mermaid secara otomatis."
  },
  {
    icon: <PencilRuler className="w-5 h-5" />,
    title: "Langkah 5 — Revisi Workspace",
    description: "Buka hasil PRD, tinjau dokumen, lalu revisi dengan bantuan chat AI interaktif."
  }
]

function TimelineLine() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <div ref={ref} className="absolute left-[24px] md:left-1/2 top-0 bottom-0 -translate-x-1/2 md:block hidden">
      <motion.div
        className="w-[2px] bg-gradient-to-b from-dove via-rust/20 to-dove origin-top"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.5, ease }}
        style={{ height: "100%" }}
      />
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        className="text-center max-w-[800px] mx-auto mb-16"
      >
        <h2 className="text-[32px] sm:text-[36px]  font-medium text-ink leading-tight mb-6">
          Bangun PRD dalam 3 fase, lalu revisi sesuai kebutuhan
        </h2>
      </motion.div>

      <div className="relative max-w-[800px] mx-auto">
        {/* Animated timeline line */}
        <TimelineLine />

        <div className="flex flex-col gap-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >

              <div className="md:w-1/2 w-full flex justify-start md:justify-end">
                <motion.div
                  whileHover={{
                    y: -4,
                    boxShadow: "rgba(0,0,0,0.01) 0px 4px 12px 0px, rgba(0,0,0,0.05) 0px 2px 6px 0px, rgba(0,0,0,0.1) 0px 1px 3px 0px",
                    transition: { duration: 0.25 }
                  }}
                  className={`bg-pure-white border border-dove/20 rounded-[24px] p-6 shadow-none max-w-[380px] w-full ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                >
                  <h3 className="text-[16px] font-semibold text-ink  mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-ash  leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Center Node — animated pop-in with pulse ring */}
              <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-12 h-12 bg-pure-white rounded-full border-4 border-pure-white flex items-center justify-center z-20 md:block hidden">
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease, type: "spring", stiffness: 200, damping: 15 }}
                  className="w-10 h-10 bg-ink text-pure-white rounded-full flex items-center justify-center relative"
                >
                  {step.icon}
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-graphite/30"
                    initial={{ scale: 1, opacity: 0.6 }}
                    whileInView={{ scale: 1.6, opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </motion.div>
              </div>

              {/* Mobile Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-10 h-10 bg-ink text-pure-white rounded-full flex items-center justify-center md:hidden mb-2 -mt-4"
              >
                {step.icon}
              </motion.div>

              <div className="md:w-1/2 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
