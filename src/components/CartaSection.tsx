import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";
import { PenLine, Users } from "lucide-react";

const PERFILES = [
  "Periodistas", "Académicos", "Empresarios", "Juristas",
  "Activistas", "Especialistas en libertad de expresión", "Víctimas de campañas falsas", "Ciudadanos",
];

export default function CartaSection() {
  return (
    <section id="carta" className="section-padding section-light">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="right">
            <span className="tag-pill bg-electric-500/10 border border-electric-500/30 text-electric-600 mb-4">
              Carta por el Civismo Digital
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-ink-900 mt-3 mb-5">
              Una declaración pública que une voces
            </h2>
            <p className="text-ink-600 text-lg leading-relaxed mb-6">
              La Carta por el Civismo Digital es un manifiesto colectivo firmado por ciudadanos,
              especialistas y líderes comprometidos con una conversación pública libre y responsable.
            </p>
            <p className="text-ink-600 leading-relaxed mb-8">
              Al firmar, respaldan los principios de Civismo Digital: protección de la libertad
              de expresión, defensa del debate robusto y exigencia de responsabilidad civil
              por el daño digital masivo verificable.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {PERFILES.map((p) => (
                <span key={p} className="tag-pill bg-ink-100 text-ink-700 border border-ink-200">
                  {p}
                </span>
              ))}
            </div>
            <Link href="/carta" className="btn-primary">
              <PenLine className="w-4 h-4" /> Firma la Carta
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.15}>
            <div className="bg-ink-900 rounded-2xl p-8 border border-ink-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-electric-500/15 flex items-center justify-center">
                  <Users className="w-5 h-5 text-electric-400" />
                </div>
                <div>
                  <p className="text-white font-heading font-bold">Firmantes de la Carta</p>
                  <p className="text-ink-400 text-sm">Suma tu nombre a esta iniciativa</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-electric-500 pl-5 mb-6">
                <p className="text-ink-200 text-sm leading-relaxed italic">
                  &ldquo;Defendemos la libertad de expresión amplia y el debate público robusto.
                  Creemos que la responsabilidad civil por el daño digital masivo y verificable
                  es compatible con —y necesaria para— una conversación pública verdaderamente libre.&rdquo;
                </p>
                <cite className="text-electric-400 text-xs font-semibold not-italic block mt-3">
                  — Carta por el Civismo Digital
                </cite>
              </blockquote>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-signal-500/10 border border-signal-500/20">
                <PenLine className="w-4 h-4 text-signal-400" />
                <p className="text-signal-300 text-sm font-semibold">
                  Sé de los primeros firmantes — tu voz importa
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
