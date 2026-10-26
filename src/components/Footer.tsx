import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'

export interface FooterProps {
  onContactClick?: () => void
}

export default function Footer({ onContactClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#0d0d0d] text-neutral-400 border-t border-neutral-900 pt-14 pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-neutral-800/80">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="text-xl font-bold tracking-tight text-white">Institut Boya</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 font-medium">
                Cabinet de Conseil
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed mx-auto md:mx-0">
              Cabinet d'excellence spécialisé dans l'accompagnement stratégique : intermédiation immobilière, intermédiation financière, gestion de patrimoine et incubation de start-up.
            </p>
            <p className="text-xs text-neutral-500 font-medium">
              Quatre expertises. Une alliance. Votre avenir.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Domaines d'Expertise
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">
                  Intermédiation Immobilière
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">
                  Intermédiation Financière
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">
                  Gestion de Patrimoine
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">
                  Incubation de Start-up
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Foire Aux Questions (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Coordinates Column */}
          <div className="md:col-span-4 space-y-3 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Coordonnées Officielles
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center justify-center md:justify-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bimbresso, Abidjan, Côte d'Ivoire</span>
              </li>
              <li>
                <a
                  href="tel:+2250757579862"
                  className="inline-flex items-center justify-center md:justify-start gap-2.5 text-neutral-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+225 07 57 57 98 62</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:direction@institutboya.online"
                  className="inline-flex items-center justify-center md:justify-start gap-2.5 text-neutral-300 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>direction@institutboya.online</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Institut Boya. Tous droits réservés. Abidjan, Côte d'Ivoire.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
