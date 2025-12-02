import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HOLDERBAUM - Expert en Toiture à Paris",
  description:
    "Votre expert en toiture, charpente et façade à Bordeaux. Savoir-faire artisanal, qualité garantie. Devis gratuit 24h/24.",
  
  icons: {
    icon: [
      {
        url: "téléchargement (2).png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "téléchargement (2).png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "téléchargement (2).png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
