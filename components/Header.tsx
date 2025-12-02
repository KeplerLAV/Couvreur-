"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const hoverScale = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }

export default function Header() {
  return (
    <motion.header
      className="bg-slate-800 text-white"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold">
              <Image
                src="/téléchargement (2).png"
                alt="Logo"
                width={100}
                height={56}
              />
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>06 88 12 78 82</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-xs">COUVERTURE.HOLDERBAUM@GMAIL.COM</span>
            </div>
            <motion.div {...hoverScale}>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                Devis Gratuit
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
