import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Shield, Award, Zap } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold">
                <Image
                  src="/téléchargement (2).png"   // chemin dans /public
                  alt="Description"
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
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">Devis Gratuit</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[900px] bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src="/roofer-working-on-a-roof-with-city-skyline-at-suns.jpg"
            alt="Couvreur travaillant sur un toit"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Votre Expert en Toiture, Charpente et Façade à Bordeaux
            </h1>
            <p className="text-lg text-white/90 mb-8">Savoir-faire artisanal, qualité garantie.</p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-6">
              DEMANDER VOTRE DEVIS GRATUIT
            </Button>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-slate-700" />
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Garantie Décennale</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-slate-700" />
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Devis Gratuit 24h/24</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-slate-700" />
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Artisans Qualifiés RGE</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-slate-700" />
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Intervention Rapide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Nos Services Clés</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-slate-200">
                <Image src="/slate-roof-tiles-close-up.jpg" alt="Couverture" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 text-center">Couverture</h3>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-slate-200">
                <Image src="/roof-renovation-gray-tiles.jpg" alt="Ravalement" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 text-center">Ravalement</h3>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-slate-200">
                <Image src="/traditional-house-with-tiled-roof.jpg" alt="Zinguerie" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 text-center">Zinguerie</h3>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-slate-200">
                <Image src="/roof-cleaning-moss-removal.jpg" alt="Démoussage" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 text-center">Démoussage</h3>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nos Chantiers Récents</h2>
            <Button
              variant="outline"
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent"
            >
              Voir toute Galerie
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative bg-slate-200">
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-semibold z-10">
                  Avant/Après
                </div>
                <Image src="/roofer-working-on-red-tiles-before-renovation.jpg" alt="Chantier avant" fill className="object-cover" />
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative bg-slate-200">
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-semibold z-10">
                  Avant/Après
                </div>
                <Image src="/roofer-working-on-renovation-after.jpg" alt="Chantier après" fill className="object-cover" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full md:w-auto">
                  Être Rappelé Rapidement
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <div className="aspect-square relative bg-slate-200">
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-semibold z-10">
                    Avant/Après
                  </div>
                  <Image src="/roof-before-renovation-work.jpg" alt="Avant rénovation" fill className="object-cover" />
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square relative bg-slate-200">
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-semibold z-10">
                    Avant/Après
                  </div>
                  <Image src="/roof-after-renovation-complete.jpg" alt="Après rénovation" fill className="object-cover" />
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-8 text-sm text-slate-300 max-w-2xl">
            <p>
              Aller baser où ces de (réparations) Aux travaux nus (travaux toutes bobineuses/réparations) au bons
              (bases/bobinées réparation à détailler)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>En cas d'urgence</p>
                <p className="font-semibold text-white">06 88 12 78 82</p>
                <p>Appelez-nous 24/7 06 88 12 78 82</p>
                <p className="text-xs">contact@couverture@kaldo.fr</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Numéro</li>
                <li>Mail</li>
                <li>Lieu de travail</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Réseaux</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Notre collaboration este possible</li>
                <li>bureau Based Rénovation</li>
                <li>Rénovation basilaire</li>
              </ul>
              <div className="flex gap-3 mt-4">
                <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  f
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  t
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  in
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  yt
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
