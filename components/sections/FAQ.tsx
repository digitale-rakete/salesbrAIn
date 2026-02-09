'use client'

import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { useState } from 'react'

const faqs = [
  {
    question: 'Wie lange dauert es, bis SalesbrAIn aktiv ist?',
    answer:
      'Nach dem Kickoff-Meeting beginnt die Research-Phase (Woche 1-2), gefolgt von der Setup-Phase (Woche 2-3). Nach 2-3 Wochen geht dein System live und beginnt, Kontakte zu generieren. Die ersten qualifizierten Termine kannst du ab Woche 5 erwarten.',
  },
  {
    question: 'Was genau bedeutet "Pay-for-Performance"?',
    answer:
      'Unser Preismodell besteht aus zwei Teilen:\n\n1. Basis-Investition: CHF 499-1,499/Monat (je nach Paket) – Deckt alle Kosten: LinkedIn Automation, E-Mail Outreach, KI-Validierung, Dashboard, Reports\n\n2. Performance-Fee: CHF 450 pro Kampagne – Wird NUR fällig wenn wir deine individuellen Erfolgsziele erreichen. Ziele nicht erreicht? Keine Performance-Fee (CHF 0).\n\nDas bedeutet: Du zahlst mehr nur wenn wir liefern. Dein Erfolg ist unsere einzige Messlatte.',
  },
  {
    question: 'Wie wird mein Erfolg gemessen?',
    answer:
      'Jedes Unternehmen ist anders. Deshalb definieren wir im Onboarding gemeinsam deine individuellen Erfolgskriterien:\n\nMögliche KPIs:\n• Anzahl qualifizierte Meetings pro Monat (z.B. 15-30 Termine)\n• Response-Rate auf Outreach (z.B. 10%+ positive Antworten)\n• Anzahl generierte Leads (z.B. 50+ MQLs)\n• Oder deine eigenen, spezifischen Ziele\n\nBasierend auf deinen Jahreszielen berechnen wir die benötigten KPIs und definieren eine realistische Mindestanzahl an "Chancen" (Opportunities) pro Kampagne.\n\nTransparenz: Du siehst den Fortschritt jederzeit live im Dashboard.',
  },
  {
    question: 'Was passiert wenn ich meine Ziele nicht erreiche?',
    answer:
      'Ganz einfach: Du zahlst keine Performance-Fee.\n\nWenn wir die gemeinsam definierten Erfolgsziele nicht erreichen, fällt die CHF 450 Performance-Fee nicht an. Du zahlst nur die Basis-Investition, die alle operativen Kosten deckt.\n\nDas ist unser Commitment an deinen Erfolg. Im Gegensatz zu Agenturen, die pauschal CHF 5,000+/Monat verlangen – egal ob du Ergebnisse siehst – teilen wir den Erfolg mit dir.',
  },
  {
    question: 'Wann wird die Performance-Fee fällig?',
    answer:
      'Die Performance-Fee von CHF 450 wird pro erfolgreiche Kampagne fällig.\n\nTiming:\n• Am Ende jeder Kampagne (typischerweise monatlich oder quartalsweise)\n• NUR wenn die vorher definierten Erfolgskriterien erreicht wurden\n• Nach Absprache: Kann auch gestaffelt werden (z.B. Teilzahlung bei Teilzielerreichung)\n\nWichtig: Die Performance-Fee ist ZUSÄTZLICH zur Basis-Investition, aber nur zahlbar bei Erfolg. Keine versteckten Kosten, keine Überraschungen.',
  },
  {
    question: 'Gibt es eine Geld-zurück-Garantie?',
    answer:
      'Unser Performance-Modell IST deine Garantie:\n\nStatt Geld-zurück bieten wir:\n• Zero-Risk Performance-Fee: Zahlst du nur bei Erfolg\n• Transparente Zieldefinition: Im Onboarding gemeinsam festgelegt\n• Live-Dashboard: Siehst du jederzeit den Fortschritt\n• Wöchentliche Reports: Bleibst du informiert\n• Quartals-Strategiegespräche: Optimieren wir gemeinsam\n\nDas bedeutet: Wenn wir nicht liefern, zahlst du keine Extra-Kosten. Dein Erfolg ist unser einziger Anreiz.',
  },
  {
    question: 'Was kostet SalesbrAIn?',
    answer:
      'Unser Preismodell ist erfolgsbasiert und transparent:\n\n1. Basis-Investition:\n• Basis-Paket: Ab CHF 499/Monat\n• Wachstums-Paket: Ab CHF 799/Monat\n• Professional-Paket: Ab CHF 1,499/Monat\n\n2. Setup-Gebühr: CHF 990 (einmalig)\n• Inkl. Ist-Analyse, Standortanalyse, Zielgruppen-Recherche\n\n3. Performance-Fee: CHF 450 pro erfolgreiche Kampagne\n• Wird NUR fällig wenn wir deine Erfolgsziele erreichen\n• Ziele nicht erreicht? CHF 0\n\nGenaue Details und individuelles Angebot im persönlichen Gespräch. Jedes Unternehmen ist einzigartig – wir erstellen ein massgeschneidertes Angebot für deine Bedürfnisse.',
  },
  {
    question: 'Brauche ich technisches Know-how?',
    answer:
      'Nein. SalesbrAIn ist ein Done-for-you Service. Wir kümmern uns um die gesamte technische Infrastruktur, Setup und Wartung. Du konzentrierst dich auf das, was du am besten kannst: Verkaufsgespräche führen.',
  },
  {
    question: 'Welche Kanäle nutzt SalesbrAIn?',
    answer:
      'Wir orchestrieren E-Mail, LinkedIn, Landing Pages und optional auch Ads (Meta, LinkedIn). Alle Kanäle arbeiten koordiniert zusammen, um maximale Reichweite und Conversion zu erzielen.',
  },
  {
    question: 'Ist SalesbrAIn DSG-konform?',
    answer:
      'Ja, zu 100%. Alle Systeme sind in der Schweiz gehostet und erfüllen die Anforderungen des Schweizer Datenschutzgesetzes (DSG). Deine Daten und die deiner Kontakte sind bei uns sicher.',
  },
  {
    question: 'Was unterscheidet SalesbrAIn von anderen Lösungen?',
    answer:
      'Im Gegensatz zu CRM-Systemen, die du selbst pflegen musst, oder teuren Agenturen, die deine Kontakte kontrollieren, bietet SalesbrAIn Done-for-you Service mit voller Kontrolle. Du besitzt deine Infrastruktur, deine Daten und deine Kontakte – während wir die Arbeit machen.',
  },
  {
    question: 'Wie viele Termine kann ich erwarten?',
    answer:
      'Das hängt von deiner Branche und Zielgruppe ab. Unsere Kunden generieren durchschnittlich 15-30 qualifizierte Termine pro Monat nach der Optimierungsphase. In der QUALIFY-Phase arbeiten wir gemeinsam daran, deine Conversion zu maximieren.',
  },
  {
    question: 'Kann ich jederzeit kündigen?',
    answer:
      'Ja. SalesbrAIn arbeitet mit flexiblen Laufzeiten. Nach der initialen Setup-Phase von 2-3 Wochen kannst du monatlich kündigen. Deine Infrastruktur und Daten bleiben bei dir – auch nach einer Kündigung.',
  },
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 xs:px-4 sm:px-4 py-1.5 xs:py-2 sm:py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
            <span className="text-xs xs:text-sm sm:text-sm text-accent-cyan font-semibold">
              Häufige Fragen
            </span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6">
            Alles, was du wissen musst
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70">
            Die wichtigsten Fragen zu SalesbrAIn – ehrlich beantwortet.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion.Root
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
            className="space-y-3 xs:space-y-4 sm:space-y-4"
          >
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-2xl overflow-hidden bg-[#141419] hover:border-accent-gold/30 transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-4 xs:px-5 sm:px-6 md:px-8 py-4 xs:py-5 sm:py-5 md:py-6 text-left flex items-center justify-between group">
                    <span className="text-base xs:text-lg sm:text-lg md:text-xl font-semibold text-white pr-4 group-hover:text-accent-gold transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`text-2xl text-accent-gold transition-transform duration-300 flex-shrink-0 ${
                        openItems.includes(`item-${index}`) ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-4 xs:px-5 sm:px-6 md:px-8 pb-4 xs:pb-5 sm:pb-6 md:pb-8">
                    <p className="text-sm xs:text-base sm:text-base text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-base xs:text-lg sm:text-lg text-white/80 mb-6">
            Noch Fragen? Lass uns sprechen.
          </p>
          <a
            href="https://calendly.com/eduard-mirdita-digitalerakete/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 xs:px-8 sm:px-8 py-3 xs:py-4 sm:py-4 text-sm xs:text-base sm:text-base bg-accent-gold text-[#1a1025] font-semibold rounded-xl hover:bg-[#ffbf00] hover:scale-[1.02] transition-all"
          >
            Demo buchen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
