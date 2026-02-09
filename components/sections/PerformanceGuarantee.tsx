'use client'

import { motion } from 'framer-motion'
import { Card } from '../Card'

export function PerformanceGuarantee() {
  return (
    <section id="guarantee" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 border-t border-white/5">
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
              Unsere Garantie
            </span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6">
            Dein Erfolg ist unser Erfolg
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto">
            Deshalb bezahlst du die Performance-Fee nur, wenn wir deine individuellen Ziele erreichen.
          </p>
        </motion.div>

        {/* How It Works - 3 Steps */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-6 lg:gap-8 mb-16">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card padding="lg" className="h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-4">
                  <span className="text-2xl xs:text-3xl sm:text-4xl font-bold text-accent-gold">1</span>
                </div>
                <h3 className="text-xl xs:text-2xl sm:text-2xl font-bold text-white mb-4">
                  Ziele definieren
                </h3>
              </div>
              <p className="text-sm xs:text-base sm:text-base text-white/70 mb-4 text-center">
                Im Onboarding definieren wir gemeinsam deine Erfolgskriterien
              </p>
              <ul className="space-y-2 text-xs xs:text-sm sm:text-sm text-white/60">
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Anzahl qualifizierte Meetings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Response-Rate Ziele</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Lead-Volumen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Oder deine eigenen KPIs</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card padding="lg" className="h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-4">
                  <span className="text-2xl xs:text-3xl sm:text-4xl font-bold text-accent-gold">2</span>
                </div>
                <h3 className="text-xl xs:text-2xl sm:text-2xl font-bold text-white mb-4">
                  Kampagne läuft
                </h3>
              </div>
              <p className="text-sm xs:text-base sm:text-base text-white/70 mb-4 text-center">
                Wir arbeiten daran, deine Ziele zu erreichen
              </p>
              <ul className="space-y-2 text-xs xs:text-sm sm:text-sm text-white/60">
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>100% automatisiert</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Live-Dashboard Tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Wöchentliche Reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-2">•</span>
                  <span>Quartals-Strategiegespräche</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card padding="lg" className="h-full bg-gradient-to-b from-accent-gold/10 to-transparent border-accent-gold/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-4">
                  <span className="text-2xl xs:text-3xl sm:text-4xl font-bold text-accent-gold">3</span>
                </div>
                <h3 className="text-xl xs:text-2xl sm:text-2xl font-bold text-white mb-4">
                  Du zahlst nur bei Erfolg
                </h3>
              </div>
              <div className="space-y-3 mb-4">
                <div className="text-center">
                  <p className="text-xs xs:text-sm sm:text-sm text-white/70 mb-1">Ziele erreicht?</p>
                  <p className="text-lg xs:text-xl sm:text-2xl font-bold text-accent-gold">
                    CHF 450 Performance-Fee
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs xs:text-sm sm:text-sm text-white/70 mb-1">Ziele NICHT erreicht?</p>
                  <p className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
                    CHF 0
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-accent-gold/10 border border-accent-gold/20">
                <p className="text-xs xs:text-sm sm:text-sm text-white/90 text-center">
                  Keine versteckten Kosten. Keine Tricks.
                  <br />
                  <span className="font-semibold text-accent-gold">Dein Erfolg ist unsere einzige Messlatte.</span>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Visual Pricing Breakdown */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8">
            So funktioniert unser Preismodell
          </h3>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Basis Investment */}
            <Card padding="lg">
              <h4 className="text-lg xs:text-xl sm:text-xl font-bold text-white mb-4">
                Basis-Investition
              </h4>
              <div className="mb-2">
                <p className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white">
                  CHF 499 - 1,499
                </p>
                <p className="text-xs xs:text-sm sm:text-sm text-white/60">pro Monat</p>
              </div>
              <p className="text-xs xs:text-sm sm:text-sm text-white/70 mb-4">
                Je nach Paket & Volumen
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs xs:text-sm sm:text-sm text-white/60 italic">
                  Details im persönlichen Gespräch
                </p>
              </div>
            </Card>

            {/* Performance Fee */}
            <Card padding="lg" className="bg-gradient-to-b from-success/10 to-transparent border-success/30">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg xs:text-xl sm:text-xl font-bold text-white">
                  + Performance-Fee
                </h4>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-success/20 border border-success/30">
                  <span className="text-xs font-semibold text-success">Erfolgsbasiert</span>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-2xl xs:text-3xl sm:text-4xl font-bold text-success">
                  CHF 450
                </p>
                <p className="text-xs xs:text-sm sm:text-sm text-white/60">pro erfolgreiche Kampagne</p>
              </div>
              <p className="text-xs xs:text-sm sm:text-sm text-white/70 mb-4">
                Wird NUR fällig wenn wir deine Erfolgsziele erreichen
              </p>
              <div className="pt-4 border-t border-white/10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 border border-success/20">
                  <span className="text-xs xs:text-sm sm:text-sm text-success font-semibold">
                    ✓ Ziel nicht erreicht = CHF 0
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Trust Reinforcement */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card padding="lg" className="bg-accent-gold/5 border-accent-gold/20">
            <div className="text-center">
              <p className="text-sm xs:text-base sm:text-lg md:text-lg text-white/90 leading-relaxed">
                Im Gegensatz zu Agenturen, die <span className="text-accent-gold font-semibold">CHF 5,000+/Monat</span> verlangen – egal ob du Ergebnisse siehst oder nicht – teilen wir den Erfolg mit dir.
                <br />
                <br />
                <span className="text-white font-semibold">Wenn wir liefern, profitieren wir beide. Wenn nicht, zahlst du nur die Basis-Investition.</span>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
