"use client"
import * as React from "react"
import { Clock, ListX, Bot } from "lucide-react"
import { motion, Variants } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
}

const cardShadow = "rgba(4,23,43,0.05) 0px 0px 0px 1px, rgba(0,0,0,0.1) 0px 20px 25px -5px, rgba(0,0,0,0.1) 0px 8px 10px -6px"

export function ProblemSection() {
  return (
    <section className="py-20 bg-fog px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-[700px] mx-auto mb-16"
        >
          <h2 className="text-[36px] sm:text-[44px] text-ink leading-[1.1] mb-6" style={{ fontFamily: "var(--font-signifier)", letterSpacing: "-0.66px" }}>
            Menulis PRD dari nol sering lambat dan tidak konsisten
          </h2>
          <p className="text-[16px] text-ash leading-[1.4] tracking-[-0.009em]">
            bikinPRD memecah proses ini menjadi flow yang lebih terarah, sehingga Anda tidak mulai dari dokumen kosong.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          {[
            { icon: <Clock className="w-5 h-5" />, title: "Memakan Waktu", desc: "Menulis PRD manual dari awal sangat lambat. Anda terjebak memikirkan format daripada logika produk.", bg: "bg-apricot-wash" },
            { icon: <ListX className="w-5 h-5" />, title: "Ide Tercerai-berai", desc: "Ide di kepala sulit diterjemahkan jadi dokumen runtut. Sering lupa memikirkan struktur database.", bg: "bg-sky-wash" },
            { icon: <Bot className="w-5 h-5" />, title: "Tidak Ramah AI Coding", desc: "Cursor atau Claude Code bekerja lebih baik dengan konteks markdown terstruktur, bukan prompt acak.", bg: "bg-fog border border-dove/20" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: cardShadow, transition: { duration: 0.3 } }}
              className="bg-pure-white rounded-[24px] p-6 cursor-default"
              style={{ boxShadow: "rgba(4,23,43,0.03) 0px 0px 0px 1px" }}
            >
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease }}
                className={`w-10 h-10 rounded-[12px] flex items-center justify-center mb-5 text-ink ${item.bg}`}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-[18px] font-medium text-ink mb-2 tracking-[-0.009em]">{item.title}</h3>
              <p className="text-[14px] text-ash leading-[1.5] tracking-[-0.009em]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}