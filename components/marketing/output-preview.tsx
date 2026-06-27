"use client"
import * as React from "react"
import { CheckCircle2, ChevronRight, LayoutTemplate, Database } from "lucide-react"
import { motion, Variants } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease }
  }
}

const contentStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 }
  }
}

const contentItem: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease }
  }
}

const sidebarItem: Variants = {
  hidden: { opacity: 0, x: 15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease }
  }
}

export function OutputPreviewSection() {
  return (
    <section id="contoh-prd" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        className="text-center max-w-[800px] mx-auto mb-16"
      >
        <h2 className="text-[32px] sm:text-[36px]  font-medium text-ink leading-tight mb-4">
          Lihat bentuk PRD yang dihasilkan
        </h2>
        <p className="text-[16px] text-ash  leading-relaxed">
          Struktur yang jelas, terformat dengan baik, dan langsung siap menjadi konteks utama untuk project Anda.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="bg-pure-white border border-dove/20 rounded-[24px] overflow-hidden shadow-subtle max-w-[1000px] mx-auto"
      >
        {/* Header Tabs */}
        <div className="flex border-b border-dove/20 bg-fog">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 px-6 py-4 text-[14px] font-semibold text-ink border-b-2 border-ink bg-pure-white"
          >
            <LayoutTemplate className="w-4 h-4" /> Markdown Preview
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{}}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 px-6 py-4 text-[14px] font-medium text-ash hover:bg-black/5 transition-colors"
          >
            <Database className="w-4 h-4" /> Raw Code
          </motion.button>
        </div>

        {/* Content area */}
        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 bg-pure-white">
          {/* Main content flow — staggered left-to-right reveal */}
          <motion.div
            className="md:w-2/3"
            variants={contentStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
          >
            <div className="prose prose-sm max-w-none text-ink ">
              <motion.div variants={contentItem}>
                <h1 className="text-[32px]  font-bold mb-2">Platform E-Learning Karyawan</h1>
                <p className="text-ash italic text-[14px] mb-8">Version 1.0.0 • Generated via bikinPRD</p>
              </motion.div>

              <motion.div variants={contentItem}>
                <h2 className="text-[20px] font-bold text-rust mt-8 mb-4 border-b border-dove/20 pb-2">1. Overview</h2>
                <p className="mb-6 leading-relaxed">
                  Platform internal perusahaan untuk on-boarding dan continuous learning karyawan. Menyediakan modul berbasis video, quiz, dan tracking progress yang terhubung ke sistem HR.
                </p>
              </motion.div>

              <motion.div variants={contentItem}>
                <h2 className="text-[20px] font-bold text-rust mt-8 mb-4 border-b border-dove/20 pb-2">2. Core Requirements</h2>
                <ul className="space-y-3 mb-6 list-none p-0">
                  {[
                    { bold: "Auth SSO:", text: "Wajib terintegrasi dengan Google Workspace perusahaan." },
                    { bold: "Modul Hierarki:", text: <>Course &rarr; Module &rarr; Lesson (Video/Text) &rarr; Quiz.</> },
                    { bold: "Admin Dashboard:", text: "HR bisa melihat progress kelulusan tiap departemen." },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-rust shrink-0 mt-0.5" />
                      <span><strong>{item.bold}</strong> {item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={contentItem}>
                <h2 className="text-[20px] font-bold text-rust mt-8 mb-4 border-b border-dove/20 pb-2">3. User Flow (Karyawan)</h2>
                <div className="bg-fog p-4 rounded-md border border-dove/20 mb-6 text-[14px]">
                  <div className="flex items-center gap-2 mb-2 text-ink">
                    Login <ChevronRight className="w-4 h-4 text-ash" /> Dashboard <ChevronRight className="w-4 h-4 text-ash" /> Pilih Course Mandatory
                  </div>
                  <div className="flex items-center gap-2 text-ink">
                    Tonton Video <ChevronRight className="w-4 h-4 text-ash" /> Kerjakan Quiz <ChevronRight className="w-4 h-4 text-ash" /> Lulus/Gagal <ChevronRight className="w-4 h-4 text-ash" /> Cetak Sertifikat
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Sidebar — slide in from right */}
          <motion.div
            className="md:w-1/3"
            variants={contentStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
          >
            <motion.div variants={sidebarItem} className="bg-fog rounded-xl p-6 border border-dove/20 mb-6">
              <h3 className="text-[14px] font-bold text-ink uppercase tracking-wider mb-4">Tech Stack</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-[12px] text-ash mb-1">Frontend</div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-pure-white border border-dove/20 rounded text-xs text-ink font-medium">Next.js</span>
                    <span className="px-2 py-1 bg-pure-white border border-dove/20 rounded text-xs text-ink font-medium">Tailwind CSS</span>
                  </div>
                </div>
                <div>
                  <div className="text-[12px] text-ash mb-1">Backend</div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-pure-white border border-dove/20 rounded text-xs text-ink font-medium">Supabase</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={sidebarItem} className="bg-pure-white rounded-xl p-6 border border-dove/20">
              <h3 className="text-[14px] font-bold text-ink uppercase tracking-wider mb-4 flex items-center gap-2">
                <Database className="w-4 h-4" /> Database ERD
              </h3>
              <div className="font-mono text-[11px] text-ink leading-relaxed overflow-x-auto">
                <pre>
{`erDiagram
  USERS ||--o{ ENROLLMENTS : has
  COURSES ||--o{ ENROLLMENTS : "taken by"
  COURSES ||--o{ MODULES : contains
  MODULES ||--o{ LESSONS : contains
  LESSONS ||--o{ QUIZZES : has`}
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
