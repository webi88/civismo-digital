import AnimateOnScroll from "./AnimateOnScroll";
import { CheckCircle, XCircle, Minus } from "lucide-react";

const DEFENDEMOS = [
  "Libertad de expresión amplia",
  "Debate público robusto",
  "Protección del periodismo de investigación",
  "Transparencia y rendición de cuentas",
  "Derecho a la crítica política",
  "Derecho al disenso y la sátira",
];

const DISCUTIMOS = [
  "Responsabilidad civil digital",
  "Daño reputacional masivo y verificable",
  "Amplificación negligente de falsedades",
  "Violencia reputacional digital coordinada",
  "Calidad de la conversación pública",
];

const NO_PROPONEMOS = [
  "Censura ni restricción preventiva",
  "Delitos de opinión",
  "Vigilancia estatal",
  "Autorización previa de contenidos",
  "Regulación de ideas o control político",
];

export default function QueEsSection() {
  return (
    <section id="que-es" className="section-padding bg-ink-950">
      <div className="container-max">
        <AnimateOnScroll className="text-center mb-16">
          <span className="tag-pill bg-electric-500/10 border border-electric-500/20 text-electric-400 mb-4">
            ¿Qué es Civismo Digital?
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
            Una conversación que{" "}
            <span className="text-electric-400">México necesita</span>
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Civismo Digital impulsa un debate nacional sobre cómo proteger simultáneamente la
            libertad de expresión y los derechos fundamentales frente al daño digital masivo.
          </p>
        </AnimateOnScroll>

        {/* Central doctrine */}
        <AnimateOnScroll className="mb-16">
          <blockquote className="relative border-l-4 border-electric-500 pl-8 py-6 bg-ink-900/60 rounded-r-2xl max-w-3xl mx-auto">
            <p className="text-ink-100 text-xl font-heading font-semibold leading-relaxed italic">
              &ldquo;La libertad de expresión no pierde valor cuando se exige responsabilidad por el
              daño causado mediante afirmaciones falsas y negligentemente difundidas. Por el
              contrario: una conversación pública libre requiere estándares mínimos de
              responsabilidad.&rdquo;
            </p>
            <cite className="block mt-4 text-electric-400 text-sm font-semibold not-italic">
              — Narrativa central de Civismo Digital
            </cite>
          </blockquote>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Lo que defendemos */}
          <AnimateOnScroll delay={0}>
            <div className="card-dark h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-electric-500/15 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-electric-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg">Lo que defendemos</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {DEFENDEMOS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-ink-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Lo que discutimos */}
          <AnimateOnScroll delay={0.1}>
            <div className="card-dark h-full border-signal-500/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-signal-500/15 flex items-center justify-center">
                  <Minus className="w-5 h-5 text-signal-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg">Lo que buscamos discutir</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {DISCUTIMOS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-ink-300 text-sm">
                    <Minus className="w-4 h-4 text-signal-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Lo que NO proponemos */}
          <AnimateOnScroll delay={0.2}>
            <div className="card-dark h-full border-rose-500/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-rose-500/15 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg">Lo que NO proponemos</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {NO_PROPONEMOS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-ink-300 text-sm">
                    <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
