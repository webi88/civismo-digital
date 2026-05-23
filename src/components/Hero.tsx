"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Scale, Megaphone } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  { icon: Megaphone, label: "Libertad de expresión amplia" },
  { icon: Shield,    label: "Protección contra daño masivo" },
  { icon: Scale,     label: "Responsabilidad civil, no penal" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink-950">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-ink bg-grid-sm opacity-100" />
      {/* Glow */}
      <div className="absolute inset-0 bg-hero-glow" />
      {/* Electric left accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-electric-500/60 to-transparent" />

      <div className="container-max relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-300 text-sm font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
            Iniciativa ciudadana · civismodigital.mx
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-4"
          >
            CIVISMO
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          >
            <span className="text-electric-400">DIGITAL</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-20 h-1 bg-signal-500 mb-7 origin-left"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-ink-200 text-xl sm:text-2xl font-body font-light leading-relaxed mb-4 max-w-2xl"
          >
            Libertad de expresión, responsabilidad y calidad de la conversación pública en la era digital.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-ink-400 text-base leading-relaxed mb-10 max-w-2xl font-body"
          >
            La comunicación masiva descentralizada es el mayor avance democrático de nuestra era.
            También ha creado desafíos nuevos: daño reputacional masivo, desinformación viral y
            destrucción arbitraria de personas, empresas e instituciones.
            <strong className="text-ink-200"> Hay que hablar de eso.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link href="/propuesta" className="btn-primary">
              Leer propuesta <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/observatorio" className="btn-outline">
              Observatorio
            </Link>
            <Link href="/carta" className="btn-outline">
              Carta ciudadana
            </Link>
          </motion.div>

          {/* Pillars strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {PILLARS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-electric-500/20 bg-electric-500/5 backdrop-blur-sm"
              >
                <Icon className="w-5 h-5 text-electric-400 flex-shrink-0" />
                <span className="text-ink-300 text-sm font-semibold">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-ink-500 text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px h-8 bg-gradient-to-b from-electric-500/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
