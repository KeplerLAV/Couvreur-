"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const hoverScale = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }

export default function Projects() {
  const projects = [
    { src: "/roofer-working-on-red-tiles-before-renovation.jpg", label: "Avant/Après" },
    { src: "/roofer-working-on-renovation-after.jpg", label: "Avant/Après" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="grid md:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
          {projects.map((p, i) => (
            <motion.div key={i} variants={fadeInUp} {...hoverScale}>
              <Card className="overflow-hidden">
                <div className="aspect-video relative bg-slate-200">
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-semibold z-10">{p.label}</div>
                  <Image src={p.src} alt={p.label} fill className="object-cover" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
