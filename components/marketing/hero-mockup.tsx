"use client"
import * as React from "react"
import { Sparkles, ArrowRight, LayoutTemplate, Database } from "lucide-react"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const
const cardShadow = "rgba(4,23,43,0.05) 0px 0px 0px 1px, rgba(0,0,0,0.1) 0px 20px 25px -5px, rgba(0,0,0,0.1) 0px 8px 10px -6px"
const sohne = { fontFamily: "var(--font-sohne)" } as const
const signifier = { fontFamily: "var(--font-signifier)", letterSpacing: "-0.2px" } as const

export function HeroMockup() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto pb-24">
      {/* Main mockup with perspective tilt entrance */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.92, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.6, ease }}
        style={{ perspective: 1200 }}
        className="relative mx-auto rounded-[24px] bg-pure-white border border-dove/20 overflow-hidden shadow-subtle"
      >

        {/* Browser chrome bar */}
        <div className="flex items-center px-4 h-12 border-b border-dove/20 bg-fog gap-2">
          <div className="flex gap-1.5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.2, ease }}
              className="w-3 h-3 rounded-full bg-dove"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.3, ease }}
              className="w-3 h-3 rounded-full bg-dove"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.4, ease }}
              className="w-3 h-3 rounded-full bg-dove"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1.5, ease }}
            className="mx-auto flex items-center gap-2 bg-pure-white border border-dove/20 rounded-md px-3 py-1 text-xs text-ash font-mono"
          >
            bikinprd.com/workspace/new
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row h-[500px] sm:h-[600px]">

          {/* Left sidebar */}
          <div className="w-full md:w-[35%] border-r border-dove/20 bg-fog p-6 flex flex-col gap-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease }}
              className="flex flex-col gap-1"
            >
              <h3 className=" text-[19px] font-medium text-ink">
                Bikin PRD Baru
              </h3>
              <p className="text-[14px] text-ash">Ikuti 3 fase untuk hasil terbaik</p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3, ease }}
                className="flex gap-3 items-start"
              >
                <div className="w-6 h-6 rounded-full bg-ink text-pure-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-[14px] font-semibold text-ink">Ide Aplikasi</div>
                  <div className="bg-pure-white border border-dove/20 rounded-md p-3 text-[13px] text-ash shadow-none">
                    Aplikasi manajemen tugas untuk tim remote dengan fitur AI summarization...
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5, ease }}
                className="flex gap-3 items-start"
              >
                <div className="w-6 h-6 rounded-full bg-rust text-pure-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-[14px] font-semibold text-ink">Tech Stack</div>
                  <div className="flex gap-2 flex-wrap">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.8 }}
                      className="px-2 py-1 bg-pure-white border border-dove/20 rounded-[12px] text-xs text-ink shadow-none"
                    >
                      Next.js
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.95 }}
                      className="px-2 py-1 bg-pure-white border border-dove/20 rounded-[12px] text-xs text-ink shadow-none"
                    >
                      Supabase
                    </motion.span>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.7, ease }}
                className="flex gap-3 items-start"
              >
                <div className="w-6 h-6 rounded-full bg-pure-white border-2 border-rust text-rust text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-[14px] font-semibold text-ink">Pertanyaan AI</div>
                  <div className="bg-apricot-wash border border-rust/10 rounded-md p-3 text-[13px] text-ink shadow-none relative">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Sparkles className="w-4 h-4 text-rust absolute top-3 right-3" />
                    </motion.div>
                    Apakah AI summarization perlu realtime saat meeting?
                    <div className="mt-3 bg-pure-white rounded p-2 text-ash border border-dove/20">
                      Setelah meeting selesai.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.0, ease }}
              className="mt-auto pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#1a1c20" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-ink text-pure-white rounded-full py-2 text-[14px] font-semibold flex items-center justify-center gap-2 shadow-none transition-colors"
              >
                Generate PRD <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right content panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6, ease }}
            className="w-full md:w-[65%] bg-pure-white p-6 md:p-8 flex flex-col overflow-y-auto relative"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-dove/20">
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-ink text-pure-white rounded-md text-[13px] font-medium shadow-none">
                  <LayoutTemplate className="w-4 h-4" /> Markdown
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-fog text-ink border border-dove/20 rounded-md text-[13px] font-medium hover:bg-dove/20 transition-colors">
                  <Database className="w-4 h-4" /> ERD Mermaid
                </button>
              </div>
              <button className="text-[13px] font-medium text-rust hover:underline">
                Copy to Clipboard
              </button>
            </div>

            <div className="font-mono text-[13px] text-ink leading-relaxed space-y-4 pb-20">
              <div>
                <span className="text-rust font-bold"># Product Requirements Document</span>
                <br />
                <span className="text-ash italic">AI Task Manager for Remote Teams</span>
              </div>

              <div>
                <span className="text-rust font-bold">## 1. Overview</span>
                <br />
                Aplikasi ini bertujuan menyederhanakan pelacakan tugas untuk tim remote dengan memanfaatkan AI untuk merangkum hasil meeting.
              </div>

              <div>
                <span className="text-rust font-bold">## 2. Tech Stack</span>
                <br />
                - <span className="font-semibold">Frontend:</span> Next.js (App Router), Tailwind CSS
                <br />
                - <span className="font-semibold">Backend/DB:</span> Supabase (PostgreSQL, Auth, Storage)
              </div>

              <div>
                <span className="text-rust font-bold">## 3. Core Features</span>
                <br />
                - <span className="font-semibold">Audio to Tasks:</span> Upload MP3/WAV, AI ekstrak poin tugas.
                <br />
                - <span className="font-semibold">Kanban Board:</span> Drag & drop manajemen status tugas.
              </div>

              <div className="bg-fog p-4 rounded-md border border-dove/20 mt-4 font-mono">
                <div className="text-ash text-xs mb-2 uppercase tracking-wider font-semibold ">Mermaid Preview</div>
                <div className="text-ink">
                  erDiagram<br/>
                  &nbsp;&nbsp;USERS ||--o&#123; TASKS : creates<br/>
                  &nbsp;&nbsp;TASKS ||--o&#123; AUDIO_LOGS : generated_from<br/>
                  &nbsp;&nbsp;WORKSPACE ||--o&#123; USERS : contains
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pure-white via-pure-white/80 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating testimonial card */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 2.2, ease }}
        className="hidden md:flex justify-end -mt-12 mr-12 relative z-10"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-pure-white border border-dove/20 rounded-[24px] p-4 shadow-subtle max-w-[280px]"
        >
          <div className="flex gap-1 mb-2 text-rust text-sm">
            ★★★★★
          </div>
          <p className="text-[13px] text-ink font-medium leading-tight mb-3">
            &quot;Lebih rapi dari prompt ChatGPT biasa. Langsung copy ke Cursor dan codebase jalan.&quot;
          </p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-apricot-wash border border-dove/20 flex items-center justify-center text-[10px] font-bold text-ink">
              JD
            </div>
            <div className="text-[11px] text-ash font-medium">Fullstack Developer</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
