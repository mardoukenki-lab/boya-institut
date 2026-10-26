import { motion } from 'framer-motion'

const INK = '#1f1f1f'

export interface HeroProps {
  eyebrow?: string
  headline?: string
  subtext?: string
  primaryBtnText?: string
  primaryBtnHref?: string
  secondaryBtnText?: string
  secondaryBtnHref?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export default function Hero({
  eyebrow = "Cabinet de Conseil & Stratégie d'Investissement",
  headline = "Quatre expertises. Une alliance. Votre avenir.",
  subtext = "Nous visons l'excellence dans chaque service proposé, avec des solutions adaptées et de haute qualité.",
  primaryBtnText = "Nos 4 Expertises",
  primaryBtnHref = "#expertises",
  secondaryBtnText = "Prendre Rendez-vous",
  secondaryBtnHref = "#contact",
  onPrimaryClick,
  onSecondaryClick,
}: HeroProps = {}) {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/15" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 22%, transparent 60%, rgba(0,0,0,0.3) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.10) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.10) 100%)',
        }}
      />
      <div
        className="absolute top-[-14%] left-1/2 -translate-x-1/2 w-[1000px] h-[720px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(55,48,163,0.05) 0%, transparent 68%)',
        }}
      />

      {/* Top-anchored content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 sm:px-6 pt-24 pb-12 sm:pt-28">
        {/* Eyebrow */}
        <motion.span
          key={`eyebrow-${eyebrow}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-neutral-800 mb-4 sm:mb-5 max-w-[90vw] truncate"
        >
          {eyebrow}
        </motion.span>

        {/* Headline */}
        <motion.h1
          key={`headline-${headline}`}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: 'easeOut' }}
          style={{ color: '#d6cccc' }}
          className="m-0 font-['Inter',sans-serif] font-bold text-[1.85rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight max-w-3xl px-2 text-balance"
        >
          {headline}
        </motion.h1>

        {/* Subtext */}
        {subtext && (
          <motion.p
            key={`subtext-${subtext}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: 'easeOut' }}
            className="mt-4 sm:mt-5 max-w-xl text-[14px] sm:text-[15px] md:text-base leading-relaxed text-[#f9f9f9] font-semibold text-center px-5 py-2.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/20 shadow-xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {subtext}
          </motion.p>
        )}

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.52, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-7 w-full sm:w-auto max-w-xs sm:max-w-none px-4 sm:px-0"
        >
          <motion.a
            href={primaryBtnHref}
            onClick={(e) => {
              if (onPrimaryClick) {
                e.preventDefault()
                onPrimaryClick()
              }
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 shadow-lg text-center cursor-pointer transition-colors"
          >
            {primaryBtnText}
          </motion.a>
          <motion.a
            href={secondaryBtnHref}
            onClick={(e) => {
              if (onSecondaryClick) {
                e.preventDefault()
                onSecondaryClick()
              }
            }}
            whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.85)' }}
            whileTap={{ scale: 0.97 }}
            style={{ color: INK }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/70 hover:bg-white/90 border border-white/80 backdrop-blur-md shadow-sm text-center cursor-pointer transition-colors"
          >
            {secondaryBtnText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
