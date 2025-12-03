import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Import Client Components uniquement
// import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HOLDERBAUM - Expert en Toiture à Paris",
  description:
    "Votre expert en toiture, charpente et façade à Bordeaux. Savoir-faire artisanal, qualité garantie. Devis gratuit 24h/24.",
  icons: {
    icon: [
      {
        url: "/telechargement.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/telechargement.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/telechargement.png",
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
        {/* Header animé (Client Component) */}
        {/* <Header /> */}

        {/* Contenu principal */}
        {children}

        {/* Footer animé (Client Component) */}
        {/* <Footer /> */}

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
