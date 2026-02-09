'use client'

import { motion } from 'framer-motion'
import { Card } from '../Card'

const packages = [
  {
    name: 'Basis',
    tagline: '1 Kampagne/Jahr',
    description: 'Perfekt für erste Schritte im B2B-Sales',
    price: 499,
    yearlyPrice: 6000,
    recommendedRuntime: 12,
    setupCost: 990,
    maxContacts: '10\'000',
    performanceFee: 450,
    features: [
      '1 Kampagne pro Jahr',
      'Bis zu 10\'000 Kontakte',
      'LinkedIn Automation',
      'E-Mail Outreach',
      'KI-Datenvalidierung (Standard)',
      'Landing Page Anbindung',
      '1 LinkedIn-Kanal',
      'Wöchentlicher Sales-Rapport',
      'SalesbrAIn Dashboard (Live-Data)',
      'Quartalsgesprächs inklusive',
    ],
    cta: 'Demo buchen',
    highlight: false,
  },
  {
    name: 'Wachstum',
    tagline: 'Beliebteste Wahl',
    description: 'Für wachsende Unternehmen mit höherem Bedarf',
    price: 799,
    yearlyPrice: 9600,
    recommendedRuntime: 12,
    setupCost: 990,
    maxContacts: '30\'000',
    performanceFee: 450,
    features: [
      '✓ Alles aus Basis',
      '',
      'PLUS:',
      '3 Kampagnen/Jahr (statt 1)',
      '30\'000 Kontakte (statt 10\'000)',
      'KI-Datenvalidierung (Erweitert)',
      'Landing Page ✓ Inklusive',
    ],
    cta: 'Demo buchen',
    highlight: true,
  },
  {
    name: 'Professionell',
    tagline: '5 Kampagnen/Jahr',
    description: 'Maximale Performance für Enterprise-Kunden',
    price: 1499,
    yearlyPrice: 18000,
    recommendedRuntime: 12,
    setupCost: 990,
    maxContacts: '100\'000',
    performanceFee: 450,
    features: [
      '✓ Alles aus Wachstum',
      '',
      'PLUS:',
      '5 Kampagnen/Jahr (statt 3)',
      '100\'000 Kontakte (statt 30\'000)',
      'Mehrere LinkedIn-Kanäle',
      '1 Ads-Kampagne inklusive',
      'Funnel (Mobile-first) ✓ Inklusive',
      'Zahlungsflexibilität (2 Raten)',
    ],
    cta: 'Demo buchen',
    highlight: false,
  },
]

export function Packages() {
  return (
    <section id="packages" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 xs:px-4 sm:px-4 py-1.5 xs:py-2 sm:py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-6">
            <span className="text-xs xs:text-sm sm:text-sm text-accent-gold font-semibold">
              Unsere Pakete
            </span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6">
            Ihr Investment
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto">
            Klare Preise. Keine versteckten Kosten. Punkt.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                padding="lg"
                className={`h-full flex flex-col ${
                  pkg.highlight
                    ? 'border-2 border-accent-gold/40 bg-gradient-to-b from-accent-gold/10 to-transparent relative'
                    : ''
                }`}
              >
                {/* Recommended Badge */}
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1.5 bg-accent-gold text-[#1a1025] text-xs xs:text-sm sm:text-sm font-semibold rounded-full">
                      Empfohlen
                    </div>
                  </div>
                )}

                {/* Package Header */}
                <div className="mb-6">
                  <h3
                    className={`text-xl xs:text-2xl sm:text-2xl font-bold mb-2 ${
                      pkg.highlight
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-cyan to-accent-gold'
                        : 'text-white'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm text-white/60">{pkg.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-sm xs:text-base sm:text-base text-white/70 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Value Proposition - No Prices */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="text-center space-y-3">
                    <p className="text-sm xs:text-base sm:text-base text-white/60">
                      Transparente Preisgestaltung im persönlichen Gespräch
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20">
                      <span className="text-xs xs:text-sm sm:text-sm text-accent-gold font-semibold">
                        ✓ Pay-for-Performance Garantie
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => {
                      // Empty string = separator
                      if (feature === '') {
                        return <li key={idx} className="h-2"></li>
                      }

                      // "PLUS:" or "✓ Alles aus..." = special formatting
                      if (feature.startsWith('PLUS:') || feature.startsWith('✓ Alles aus')) {
                        return (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="text-white/90 text-xs xs:text-sm sm:text-sm font-bold leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        )
                      }

                      // Regular feature
                      return (
                        <li key={idx} className="flex items-start space-x-3">
                          <span
                            className={`mt-1 flex-shrink-0 ${
                              pkg.highlight ? 'text-accent-gold' : 'text-success'
                            }`}
                          >
                            •
                          </span>
                          <span className="text-white/80 text-xs xs:text-sm sm:text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="https://calendly.com/eduard-mirdita-digitalerakete/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full inline-flex items-center justify-center
                    px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 text-base xs:text-base sm:text-lg font-semibold rounded-lg
                    transition-all duration-[300ms] ease-out
                    ${pkg.highlight
                      ? 'bg-accent-gold text-[#1a1025] hover:bg-[#ffbf00] hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-gold/20'
                      : 'bg-transparent border-2 border-white/20 text-white hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/5'
                    }
                  `}
                >
                  {pkg.cta}
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div
            className="inline-block px-8 py-4 rounded-2xl border"
            style={{
              borderColor: 'rgba(230, 181, 0, 0.3)',
              backgroundColor: 'rgba(230, 181, 0, 0.05)',
            }}
          >
            <p className="text-sm xs:text-base sm:text-lg md:text-lg text-white/90">
              <span className="text-accent-gold font-semibold">Transparente Preise.</span>
              {' '}Keine versteckten Gebühren. Massgeschneidert für dein Unternehmen.
            </p>
          </div>

          {/* Guarantee Highlight */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-success text-2xl mb-2">✓</div>
                <p className="text-sm text-white/80">
                  <span className="font-semibold text-white">100% Erreichbarkeit</span>
                  <br />vs. 60-80% Branchenstandard
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-success text-2xl mb-2">✓</div>
                <p className="text-sm text-white/80">
                  <span className="font-semibold text-white">Pay-for-Performance</span>
                  <br />nur bei Erfolg fällig
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-success text-2xl mb-2">✓</div>
                <p className="text-sm text-white/80">
                  <span className="font-semibold text-white">Automatische DSGVO</span>
                  <br />-Konformität inklusive
                </p>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-12 p-6 xs:p-8 sm:p-8 bg-accent-gold/5 border border-accent-gold/20 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl xs:text-2xl sm:text-2xl font-bold text-white mb-4 text-center">
              Massgeschneiderte Lösungen für dein Unternehmen
            </h3>
            <p className="text-sm xs:text-base sm:text-base text-white/70 text-center max-w-2xl mx-auto">
              Jedes Unternehmen ist einzigartig. Deshalb erstellen wir ein individuelles Angebot,
              das perfekt auf deine Bedürfnisse, Zielgruppe und Ziele abgestimmt ist.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
