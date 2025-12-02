"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const hoverScale = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }

export default function Hero() {
  return (
    <section className="relative h-[900px] bg-slate-900">
      <div className="absolute inset-0">
        <Image
          src="/roofer-working-on-a-roof-with-city-skyline-at-suns.jpg"
          alt="Couvreur travaillant sur un toit"
          fill
          className="object-cover opacity-70"
        />
      </div>
      <motion.div className="relative container mx-auto px-4 h-full flex flex-col justify-center" initial="hidden" animate="visible" variants={fadeInUp}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
          Votre Expert en Toiture, Charpente et Façade à Bordeaux
        </h1>
        <p className="text-lg text-white/90 mb-8">Savoir-faire artisanal, qualité garantie.</p>
        <motion.div {...hoverScale}>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-6">
            DEMANDER VOTRE DEVIS GRATUIT
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
