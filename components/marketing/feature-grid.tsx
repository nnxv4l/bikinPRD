"use client"
import * as React from "react"
import { Component, Brain, FileText, Share2, PenTool, GitMerge } from "lucide-react"
import { motion, Variants } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease }
  }
}

const features = [
  {
    icon: <Component className="w-5 h-5 text-rust" />,
    badgeText: "STRUCTURE",
    badgeColor: "bg-sky-wash text-rust",
    title: "Guided 3-Phase Flow",
    description: "Alur pembuatan PRD dibagi menjadi input ide, preferensi teknologi, dan pertanyaan dinamis agar requirement tidak tercecer."
  },
  {
    icon: <Brain className="w-5 h-5 text-rust" />,
    badgeText: "SMART AI",
    badgeColor: "bg-apricot-wash text-rust",
    title: "Dynamic AI Questions",
    description: "AI menghasilkan pertanyaan yang menyesuaikan konteks ide produk Anda, bukan template statis yang kaku."
  },
  {
    icon: <FileText className="w-5 h-5 text-rust" />,
    badgeText: "FORMAT",
    badgeColor: "bg-pure-white border border-dove/20 text-rust",
    title: "Full PRD in Markdown",
    description: "PRD dihasilkan dalam format Markdown yang mudah dibaca, di-copy langsung ke AI coding tools, dan di-download."
  },
  {
    icon: <Share2 className="w-5 h-5 text-rust" />,
    badgeText: "VISUAL",
    badgeColor: "bg-fog border border-dove/20 text-rust",
    title: "Mermaid ERD Output",
    description: "Struktur database atau entitas divisualisasikan secara otomatis dalam bentuk kode diagram ERD Mermaid."
  },
  {
    icon: <PenTool className="w-5 h-5 text-rust" />,
    badgeText: "ITERATION",
    badgeColor: "bg-sky-wash text-rust",
    title: "Revision Workspace",
    description: "PRD tidak berhenti di hasil pertama. Lanjutkan perbaikan spesifikasi melalui antarmuka chat workspace."
  },
  {
    icon: <GitMerge className="w-5 h-5 text-rust" />,
    badgeText: "TRACKING",
    badgeColor: "bg-apricot-wash text-rust",
    title: "Versioned Iteration",
    description: "Setiap revisi PRD dapat berkembang sebagai versi baru agar perubahan scope lebih mudah dilacak."
  }
]

export function FeatureGrid() {
  return (
    <section id="fitur" className="py-24 bg-fog px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-[800px] mx-auto mb-16"
        >
          <h2 className="text-[32px] sm:text-[36px]  font-medium text-ink leading-tight">
            Dirancang untuk membantu Anda menyusun PRD yang lebih siap dipakai
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: index % 3 === 0 ? 2 : index % 3 === 2 ? -2 : 0,
                boxShadow: "rgba(0,0,0,0.01) 0px 4px 12px 0px, rgba(0,0,0,0.05) 0px 2px 6px 0px, rgba(0,0,0,0.1) 0px 1px 3px 0px",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-pure-white border border-dove/20 rounded-[24px] p-6 shadow-subtle relative group cursor-default"
              style={{ perspective: 600 }}
            >
              {/* Badge with scale-in */}
              <motion.div
                className="absolute top-6 right-6"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <span className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${feature.badgeColor}`}>
                  {feature.badgeText}
                </span>
              </motion.div>

              <motion.div
                className="w-10 h-10 rounded bg-pure-white flex items-center justify-center mb-6"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-[19px]  font-medium text-ink mb-3">
                {feature.title}
              </h3>

              <p className="text-[14px] text-ash  leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
