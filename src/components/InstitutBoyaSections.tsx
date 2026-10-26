import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import {
  Building2,
  Landmark,
  Briefcase,
  Rocket,
  ArrowRight,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'

interface InstitutBoyaSectionsProps {
  onOpenContact: (domain?: string) => void
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function InstitutBoyaSections({ onOpenContact }: InstitutBoyaSectionsProps) {
  const expertises = [
    {
      id: 'immobilier',
      title: 'Intermédiation Immobilière',
      tagline: 'Sourcing, valorisation & structuration d’actifs de premier plan',
      icon: Building2,
      description:
        'Accompagnement intégral dans l’acquisition, la cession et la gestion d’actifs immobiliers stratégiques : résidentiel de prestige, immobilier commercial, foncier d’entreprise et programmes neufs.',
      points: [
        'Sourcing confidentiel d’opportunités off-market',
        'Audit technique, juridique et financier préalable',
        'Négociation contractuelle et montages financiers dédiés',
        'Stratégies de valorisation locative et patrimoniale',
      ],
      stats: [
        { label: 'Volume transactionnel', value: '85M€+' },
        { label: 'Rendement moyen ciblé', value: '7.8%' },
      ],
    },
    {
      id: 'finance',
      title: 'Intermédiation Financière',
      tagline: 'Solutions de liquidité, crédits structurés & levées de fonds',
      icon: Landmark,
      description:
        'Pont stratégique entre porteurs de projets et institutions financières, banques partenaires, family offices et fonds de dette pour sécuriser les capitaux nécessaires à votre croissance.',
      points: [
        'Structuration de crédits d’investissement et dettes seniors',
        'Montages en quasi-fonds propres et dettes subordonnées',
        'Optimisation de la structure financière et du BFR',
        'Défense des dossiers auprès des comités de crédit',
      ],
      stats: [
        { label: 'Fonds mobilisés', value: '120M€+' },
        { label: 'Taux d’accord bancaire', value: '94%' },
      ],
    },
    {
      id: 'patrimoine',
      title: 'Gestion de Patrimoine',
      tagline: 'Préservation, optimisation fiscale & transmission intergénérationnelle',
      icon: Briefcase,
      description:
        'Approche personnalisée et indépendante pour protéger et faire fructifier votre patrimoine privé et professionnel, en tenant compte des impératifs juridiques et fiscaux.',
      points: [
        'Bilan patrimonial global et audit successoral',
        'Stratégies d’optimisation fiscale légale et sur-mesure',
        'Allocation d’actifs diversifiée (tangibles, financiers, non coté)',
        'Accompagnement des dirigeants dans la transmission d’entreprise',
      ],
      stats: [
        { label: 'Actifs conseillés', value: '180M€' },
        { label: 'Satisfaction clients', value: '99%' },
      ],
    },
    {
      id: 'incubation',
      title: 'Incubation de Start-up',
      tagline: 'Propulser l’innovation du prototype à l’échelle internationale',
      icon: Rocket,
      description:
        'Programme d’accélération sur-mesure pour fondateurs audacieux : hébergement, mentorat stratégique de haut niveau, structuration du business model et mise en relation directe avec les investisseurs.',
      points: [
        'Validation de product-market fit et design de roadmap',
        'Mentorat individuel par des entrepreneurs aguerris',
        'Accès direct aux business angels et fonds de venture capital',
        'Accompagnement juridique, gouvernance et pitch deck de levée',
      ],
      stats: [
        { label: 'Levées réussies', value: '88%' },
        { label: 'Accompagnement', value: 'Sur-mesure' },
      ],
    },
  ]

  return (
    <div className="w-full bg-[#fbfbfb] text-[#1f1f1f] border-t border-neutral-200">
      {/* Intro strip */}
      <section id="expertises" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={itemVariants}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500">
            L'Excellence Opérationnelle
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mt-2 mb-3 sm:mb-4 text-balance">
            Quatre domaines d'expertise complémentaires
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed px-2">
            Institut Boya déploie une synergie unique entre immobilier, finance d'entreprise, ingénierie patrimoniale et accompagnement entrepreneurial.
          </p>
        </motion.div>

        {/* 4 Cards Grid with staggered entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          {expertises.map((exp, idx) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-white p-5 sm:p-7 md:p-8 border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300 flex items-center justify-center text-neutral-800">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-1">{exp.title}</h3>
                  <p className="text-xs font-medium text-neutral-500 mb-2.5 sm:mb-3 leading-snug">{exp.tagline}</p>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5 sm:mb-6">{exp.description}</p>

                  <ul className="space-y-2 mb-5 sm:mb-6 text-xs text-neutral-700">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 sm:pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4 sm:gap-5">
                    {exp.stats.map((s, i) => (
                      <div key={i}>
                        <div className="text-sm sm:text-base font-bold text-neutral-900">{s.value}</div>
                        <div className="text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-wide">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenContact(exp.id)}
                    className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-semibold hover:bg-neutral-900 hover:text-white transition-all shadow-xs cursor-pointer min-h-[38px]"
                  >
                    <span>Consulter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Methodology Section with staggered entrance */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={itemVariants}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400">
            Notre Méthode Éprouvée
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mt-2 mb-3 sm:mb-4 text-balance">
            Un accompagnement rigoureux de A à Z
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 px-2">
            Chaque mission fait l'objet d'un processus strict garantissant la confidentialité, la conformité réglementaire et l'excellence du résultat.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            {
              step: '01',
              title: 'Diagnostic 360°',
              desc: 'Audit complet de votre situation patrimoniale, financière ou entrepreneuriale en toute confidentialité.',
            },
            {
              step: '02',
              title: 'Ingénierie & Stratégie',
              desc: 'Élaboration d’un plan d’action sur-mesure combinant nos 4 domaines d’expertise.',
            },
            {
              step: '03',
              title: 'Négociation & Clôture',
              desc: 'Intermédiation directe avec les contreparties (banques, acquéreurs, investisseurs, notaires).',
            },
            {
              step: '04',
              title: 'Suivi & Pérennisation',
              desc: 'Veille continue, ajustement dynamique et consolidation à long terme de vos acquis.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 sm:p-6 rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-all space-y-2.5 sm:space-y-3 shadow-xs"
            >
              <span className="text-xl sm:text-2xl font-black text-neutral-300">{item.step}</span>
              <h4 className="text-sm sm:text-base font-bold text-neutral-900">{item.title}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact & Coordonnées Section */}
      <section id="contact" className="bg-neutral-900 text-white py-14 sm:py-20 px-4 sm:px-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-neutral-400">
              Prendre Contact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-2 mb-3 text-balance">
              Institut Boya à vos côtés
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed px-2">
              Nos associés et experts seniors sont à votre écoute pour échanger sur vos projets stratégiques en Côte d'Ivoire et à l'international.
            </p>
          </div>

          {/* 3 Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-800/70 border border-neutral-700/80 flex items-start gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-700/80 flex items-center justify-center text-white shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-0.5 sm:mb-1">
                  Adresse
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">Côte d'Ivoire, Abidjan</p>
                <p className="text-xs text-neutral-400 mt-0.5">Bimbresso</p>
              </div>
            </div>

            <a
              href="tel:+2250757579862"
              className="p-4 sm:p-6 rounded-2xl bg-neutral-800/70 border border-neutral-700/80 flex items-start gap-3.5 sm:gap-4 hover:border-neutral-500 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-700/80 flex items-center justify-center text-white shrink-0 group-hover:bg-neutral-600 transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-0.5 sm:mb-1">
                  Téléphone
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  +225 07 57 57 98 62
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">Lundi au vendredi, 8h30 - 18h00</p>
              </div>
            </a>

            <a
              href="mailto:direction@institutboya.online"
              className="p-4 sm:p-6 rounded-2xl bg-neutral-800/70 border border-neutral-700/80 flex items-start gap-3.5 sm:gap-4 hover:border-neutral-500 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-700/80 flex items-center justify-center text-white shrink-0 group-hover:bg-neutral-600 transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-0.5 sm:mb-1">
                  E-mail officiel
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white break-all sm:break-normal group-hover:text-emerald-300 transition-colors">
                  direction@institutboya.online
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">Réponse garantie sous 24h</p>
              </div>
            </a>
          </div>

          {/* Central Call to Action button */}
          <div className="text-center pt-2 sm:pt-4">
            <button
              onClick={() => onOpenContact('all')}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-neutral-950 font-bold text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
            >
              <span>Ouvrir le formulaire de rendez-vous</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Clean Professional Footer */}
      <footer className="bg-black text-neutral-400 py-8 sm:py-10 px-4 sm:px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span className="text-sm font-bold text-white tracking-tight">Institut Boya</span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <span className="text-neutral-400">Conseil, Finance & Patrimoine</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-neutral-400">
            <a href="#expertises" className="hover:text-white transition-colors">Expertises</a>
            <a href="tel:+2250757579862" className="hover:text-white transition-colors">+225 07 57 57 98 62</a>
            <a href="mailto:direction@institutboya.online" className="hover:text-white transition-colors break-all sm:break-normal">direction@institutboya.online</a>
          </div>
          <p className="text-neutral-500 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} Institut Boya. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}
