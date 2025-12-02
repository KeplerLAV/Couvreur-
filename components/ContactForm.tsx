"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const hoverScale = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }

export default function ContactForm() {
  const images = [
    { src: "/roof-before-renovation-work.jpg", label: "Avant/Après" },
    { src: "/roof-after-renovation-complete.jpg", label: "Avant/Après" },
  ]

  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Formulaire */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Un projet de rénovation ou construction ?</h2>
            <form className="space-y-4">
              <Input
                placeholder="Nom"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
              <Textarea
                placeholder="Message"
                rows={4}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
              <motion.div {...hoverScale}>
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full md:w-auto">
                  Être Rappelé Rapidement
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Images */}
          <motion.div className="grid grid-cols-2 gap-4" variants={fadeInUp}>
            {images.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} {...hoverScale}>
                <Card className="overflow-hidden">
                  <div className="aspect-square relative bg-slate-200">
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-semibold z-10">
                      {item.label}
                    </div>
                    <Image src={item.src} alt={item.label} fill className="object-cover" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Texte additionnel */}
        <motion.div className="mt-8 text-sm text-slate-300 max-w-2xl" variants={fadeInUp}>
          <p>
            Aller baser où ces de (réparations) Aux travaux nus (travaux toutes bobineuses/réparations) au bons
            (bases/bobinées réparation à détailler)
          </p>
        </motion.div>
      </div>
    </section>
  )
}
