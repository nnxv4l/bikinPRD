"use client"
import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-30px" }}
      transition={{ duration: 0.6, ease }}
      className="border-t border-dove/20 py-12 px-4 sm:px-6 lg:px-8 bg-pure-white"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{}}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="flex flex-col items-center md:items-start gap-2"
        >
          <Link href="/" className=" text-[20px] font-bold text-ink">
            bikinPRD
          </Link>
          <p className="text-[13px] text-ash ">
            &copy; {new Date().getFullYear()} bikinPRD. All rights reserved.
          </p>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{}}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="flex gap-6"
        >
          <Link href="#fitur" className="text-[14px] text-ash hover:text-ink transition-colors ">
            Fitur
          </Link>
          <Link href="#cara-kerja" className="text-[14px] text-ash hover:text-ink transition-colors ">
            Cara Kerja
          </Link>
          <Link href="/login" className="text-[14px] text-ash hover:text-ink transition-colors ">
            Masuk
          </Link>
        </motion.nav>
      </div>
    </motion.footer>
  )
}
