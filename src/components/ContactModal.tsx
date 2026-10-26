import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  CheckCircle2,
  Send,
  Building2,
  Landmark,
  Briefcase,
  Rocket,
  Loader2,
  AlertCircle,
} from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  initialDomain?: string
  mode?: 'monsoon' | 'boya'
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgobznna'

export default function ContactModal({
  isOpen,
  onClose,
  initialDomain = 'all',
  mode = 'boya',
}: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedExpertise, setSelectedExpertise] = useState(
    initialDomain !== 'all' ? initialDomain : 'immobilier'
  )
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) return

    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nom: name,
          email: email,
          telephone: phone || 'Non renseigné',
          domaine_expertise: selectedExpertise,
          message: message || 'Demande de prise de rendez-vous initial.',
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json().catch(() => null)
        setErrorMessage(
          data?.errors?.map((err: any) => err.message).join(', ') ||
            "Une erreur s'est produite lors de l'envoi. Veuillez réessayer."
        )
      }
    } catch {
      setErrorMessage(
        "Impossible de joindre le serveur. Veuillez vérifier votre connexion et réessayer."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setErrorMessage(null)
    setIsSubmitted(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-7 text-[#1f1f1f] shadow-2xl border border-neutral-100"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 p-1 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                  Demande bien transmise !
                </h3>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Merci {name}. Votre message a été envoyé à l'équipe de direction de l'Institut Boya. Un conseiller prendra contact avec vous dans les plus brefs délais.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Institut Boya · Prise de Rendez-vous
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mt-1">
                    Échangez avec nos experts
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Bénéficiez d’un entretien confidentiel pour cadrer et propulser vos projets.
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-neutral-100 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-neutral-500">
                    <span>📍 Abidjan, Bimbresso</span>
                    <span>·</span>
                    <a href="tel:+2250757579862" className="text-neutral-700 hover:text-black font-medium transition-colors">
                      📞 +225 07 57 57 98 62
                    </a>
                    <span>·</span>
                    <a href="mailto:direction@institutboya.online" className="text-neutral-700 hover:text-black font-medium transition-colors">
                      ✉️ direction@institutboya.online
                    </a>
                  </div>
                </div>

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Domaine d'expertise souhaité
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'immobilier', label: 'Immobilier', icon: Building2 },
                        { id: 'finance', label: 'Finance', icon: Landmark },
                        { id: 'patrimoine', label: 'Patrimoine', icon: Briefcase },
                        { id: 'incubation', label: 'Incubation', icon: Rocket },
                      ].map((d) => {
                        const Icon = d.icon
                        const active = selectedExpertise === d.id
                        return (
                          <button
                            type="button"
                            key={d.id}
                            onClick={() => setSelectedExpertise(d.id)}
                            className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs font-medium transition-all text-left cursor-pointer ${
                              active
                                ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm'
                                : 'border-neutral-200 bg-neutral-50/60 text-neutral-700 hover:border-neutral-300'
                            }`}
                          >
                            <Icon className="w-4 h-4 shrink-0" />
                            <span className="truncate">{d.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Kra Martial"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nom@entreprise.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="+33 / +225..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Détails de votre projet / besoins
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Précisez vos objectifs, le montant envisagé ou le calendrier souhaité..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 disabled:opacity-60 transition-colors shadow-md mt-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmettre ma demande</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
