"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Award, Zap } from "lucide-react"

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Features() {
  const items = [
    { icon: Shield, title: "Garantie Décennale" },
    { icon: Clock, title: "Devis Gratuit 24h/24" },
    { icon: Award, title: "Artisans Qualifiés RGE" },
    { icon: Zap, title: "Intervention Rapide" },
  ]

  return (
    <section className="bg-white py-8 border-b">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {items.map(({ icon: Icon, title }, i) => (
            <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3">
              <Icon className="h-8 w-8 text-slate-700" />
              <div className="text-sm font-semibold text-slate-900">{title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
