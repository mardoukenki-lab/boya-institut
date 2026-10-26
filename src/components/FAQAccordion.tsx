import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

const faqData: FAQItem[] = [
  {
    category: 'Expertises & Vision',
    question: "Quels sont les domaines d'expertise de l'Institut Boya ?",
    answer:
      "L'Institut Boya accompagne ses clients à travers quatre domaines clés d'excellence : l'intermédiation immobilière (sourcing et transactions d'actifs), l'intermédiation financière (crédits structurés et levées de fonds), la gestion de patrimoine (ingénierie et optimisation patrimoniale) et l'incubation de start-up (programme d'accélération et mise en relation investisseurs).",
  },
  {
    category: 'Localisation & Présence',
    question: 'Où est situé le siège de l’Institut Boya ?',
    answer:
      "Le cabinet de l'Institut Boya est basé en Côte d'Ivoire, à Abidjan (Bimbresso). Nous intervenons sur l'ensemble du territoire ivoirien, dans la sous-région ouest-africaine et auprès d'investisseurs de la diaspora et internationaux.",
  },
  {
    category: 'Prise de Contact',
    question: 'Comment contacter la direction de l’Institut Boya ?',
    answer:
      "Vous pouvez joindre directement la direction générale par téléphone au +225 07 57 57 98 62 ou par e-mail à l'adresse direction@institutboya.online. Un formulaire de prise de rendez-vous en ligne est également disponible pour convenir d'un premier entretien confidentiel sous 24h ouvrées.",
  },
  {
    category: 'Accompagnement',
    question: 'À qui s’adressent nos solutions d’intermédiation et de conseil ?',
    answer:
      'Nos services s’adressent aux dirigeants d’entreprise, investisseurs institutionnels, propriétaires fonciers, entrepreneurs et familles fortunées souhaitant structurer, valoriser ou diversifier leurs actifs avec un haut niveau d’exigence juridique et financière.',
  },
  {
    category: 'Incubation',
    question: 'Comment intégrer le programme d’incubation de start-up ?',
    answer:
      'Les candidatures s’effectuent via notre formulaire de contact en sélectionnant le pôle « Incubation ». Les dossiers retenus bénéficient d’un audit préliminaire, d’un mentorat par des pairs expérimentés, d’une préparation rigoureuse au pitch deck et d’un accès direct à notre réseau de business angels et fonds partenaires.',
  },
]

interface FAQAccordionProps {
  onOpenContact?: () => void
}

export default function FAQAccordion({ onOpenContact }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="w-full bg-[#f8f8f8] text-[#1f1f1f] py-16 sm:py-24 px-4 sm:px-6 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center justify-center gap-1.5 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-neutral-600" />
            Questions Fréquentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 text-balance">
            Tout comprendre sur l'Institut Boya
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed px-2">
            Retrouvez les réponses aux interrogations les plus fréquentes concernant nos 4 pôles d'activité et nos modalités d'intervention.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-neutral-300 shadow-md ring-1 ring-black/5'
                    : 'bg-white/80 border-neutral-200/90 hover:border-neutral-300 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-1 pr-2">
                    {item.category && (
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                        {item.category}
                      </span>
                    )}
                    <span className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-neutral-900 text-white rotate-180' : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 sm:mt-12 text-center p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-neutral-900">Vous avez une question spécifique ?</h4>
            <p className="text-xs text-neutral-500 mt-0.5">Nos associés sont disponibles pour un échange sur-mesure.</p>
          </div>
          {onOpenContact && (
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-sm inline-flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <span>Poser une question</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
