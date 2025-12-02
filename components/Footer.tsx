"use client"

import { motion } from "framer-motion"

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Footer() {
  const socials = ["f", "t", "in", "yt"]

  return (
    <motion.footer
      className="bg-slate-900 text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>En cas d'urgence</p>
              <p className="font-semibold text-white">06 88 12 78 82</p>
              <p>Appelez-nous 24/7 06 88 12 78 82</p>
              <p className="text-xs">contact@couverture@kaldo.fr</p>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Numéro</li>
              <li>Mail</li>
              <li>Lieu de travail</li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="font-bold text-lg mb-4">Réseaux</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Notre collaboration este possible</li>
              <li>bureau Based Rénovation</li>
              <li>Rénovation basilaire</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {socials.map((icon, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center cursor-pointer"
                  whileHover={{ backgroundColor: "#dc2626" }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
