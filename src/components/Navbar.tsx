import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ArrowRight } from 'lucide-react'

const INK = '#1f1f1f'
const defaultNavLinks = ["Expertises", "Immobilier", "Finance", "Patrimoine", "Incubation", "Contact"]

export interface NavbarProps {
  brand?: string
  links?: string[]
  onLinkClick?: (link: string) => void
}

export default function Navbar({
  brand = "Institut Boya",
  links = defaultNavLinks,
  onLinkClick,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSelectLink = (link: string) => {
    setMobileMenuOpen(false)
    if (onLinkClick) {
      onLinkClick(link)
    } else {
      const el = document.getElementById(link.toLowerCase().replace(/\s+/g, '-'))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex flex-col items-center px-3 sm:px-5">
      {/* Main Pill Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-fit flex items-center justify-between sm:justify-center gap-4 sm:gap-9 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/70 sm:bg-white/55 border border-white/70 backdrop-blur-xl shadow-lg"
      >
        <span
          className="text-base sm:text-[17px] font-bold text-[#1f1f1f] tracking-tight whitespace-nowrap"
        >
          {brand}
        </span>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 flex-nowrap">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => {
                e.preventDefault()
                handleSelectLink(link)
              }}
              className="text-[13px] font-medium text-neutral-700 hover:text-black whitespace-nowrap transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-full text-neutral-800 hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 w-[calc(100vw-24px)] max-w-sm rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/80 p-4 shadow-2xl space-y-3"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => handleSelectLink(link)}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-800 hover:bg-neutral-100/80 transition-colors flex items-center justify-between"
                >
                  <span>{link}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
              <a
                href="tel:+2250757579862"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-100 text-neutral-900 text-xs font-semibold hover:bg-neutral-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>+225 07 57 57 98 62</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onLinkClick) onLinkClick('Contact')
                }}
                className="w-full py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
              >
                Prendre Rendez-vous
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
