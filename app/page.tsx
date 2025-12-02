import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  )
}
