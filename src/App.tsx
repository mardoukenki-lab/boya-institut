import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InstitutBoyaSections from './components/InstitutBoyaSections'
import ContactModal from './components/ContactModal'
import FAQAccordion from './components/FAQAccordion'
import Footer from './components/Footer'
import SplashCursor from './components/SplashCursor'
import './index.css'

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [selectedExpertise, setSelectedExpertise] = useState<string>('all')

  const handleOpenContact = (domain: string = 'all') => {
    setSelectedExpertise(domain)
    setIsContactOpen(true)
  }

  const handleNavClick = (link: string) => {
    const l = link.toLowerCase()
    if (l.includes('contact')) {
      handleOpenContact()
      return
    }
    const targetElement = document.getElementById(l.replace(/\s+/g, '-'))
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Interactive fluid splash cursor */}
      <SplashCursor
        rainbow
        size={1}
        force={1}
        swirl={3}
        trail={1}
        clickSplash
        zIndex={40}
      />

      {/* Navbar Institut Boya */}
      <Navbar
        brand="Institut Boya"
        links={['Expertises', 'Immobilier', 'Finance', 'Patrimoine', 'Incubation', 'FAQ', 'Contact']}
        onLinkClick={handleNavClick}
      />

      {/* Hero section */}
      <Hero
        eyebrow="Cabinet de Conseil & Stratégie d'Investissement"
        headline="Quatre expertises. Une alliance. Votre avenir."
        subtext="Nous visons l'excellence dans chaque service proposé, avec des solutions adaptées et de haute qualité."
        primaryBtnText="Nos 4 Expertises"
        primaryBtnHref="#expertises"
        secondaryBtnText="Prendre Rendez-vous"
        secondaryBtnHref="#contact"
        onPrimaryClick={() => {
          const el = document.getElementById('expertises')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
        onSecondaryClick={() => handleOpenContact('all')}
      />

      {/* Les 4 domaines d'expertise et méthodologie */}
      <InstitutBoyaSections onOpenContact={handleOpenContact} />

      {/* Foire Aux Questions (FAQ & Référencement) */}
      <FAQAccordion onOpenContact={() => handleOpenContact('all')} />

      {/* Footer component with address, phone and email */}
      <Footer onContactClick={() => handleOpenContact('all')} />

      {/* Contact & Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialDomain={selectedExpertise}
        mode="boya"
      />
    </div>
  )
}
