"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const hoverScale = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }

export default function Services() {
  const services = [
    { src: "/slate-roof-tiles-close-up.jpg", title: "Couverture" },
    { src: "/roof-renovation-gray-tiles.jpg", title: "Ravalement" },
    { src: "/traditional-house-with-tiled-roof.jpg", title: "Zinguerie" },
    { src: "/roof-cleaning-moss-removal.jpg", title: "Démoussage" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Nos Services Clés</h2>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeInUp} {...hoverScale}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative bg-slate-200">
                  <Image src={s.src} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 text-center">{s.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
